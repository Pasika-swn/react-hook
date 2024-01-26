import { useState, useEffect, useRef, useMemo } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";

const getInitialCounter = () =>
  new Promise((res) => {
    setTimeout(() => res(10), 1000);
  });

export const CounterPage = () => {
  const [initialCounter, setInitialCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    setLoading(true);
    getInitialCounter().then((initialCounter) => {
      setLoading(false);
      setInitialCounter(initialCounter);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      inputEl.current.focus();
    }
  }, [loading]);

  useEffect(() => {
    let id;
    setCounter(initialCounter);
    id = setInterval(() => {
      console.log("initial counter", initialCounter);
      setCounter((previousCounter) =>
        previousCounter > 0 ? previousCounter - 1 : previousCounter
      );
    }, 1000);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [initialCounter]);

  const decrement = useMemo(() => {
    //ใช้เพื่อ memorize ไม่ต้องมาเรนเดอร์ทุกรอบ ถ้ายังไม่กด - ก็ไม่ทำ
    console.log("creating decrement fn");
    return () => {
      setCounter((previousCounter) => previousCounter - 1);
    };
  }, [setCounter]);
  const increment = useMemo(() => {
    console.log("creating increment fn");
    return () => {
      setCounter((previousCounter) => previousCounter - 1);
    };
  }, [setCounter]);
  const handleChange = useMemo(() => {
    console.log("creating handleChange fn");
    return (ele) => {
      setInitialCounter(ele.target.value);
    };
  }, [setInitialCounter]);

  if (loading) return <Wrapper>Loading...</Wrapper>;
  return (
    <Wrapper>
      <CounterText>{counter}</CounterText>
      <div>
        <Button onClick={decrement}>-1</Button>
        <Button onClick={increment}>+1</Button>
      </div>
      <Label>
        <span>Initial Counter</span>
        <Input ref={inputEl} value={initialCounter} onChange={handleChange} />
      </Label>
    </Wrapper>
  );
};

export default CounterPage;
