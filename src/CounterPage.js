import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";

const getInitialCounter = () =>
  new Promise((res) => {
    setTimeout(() => res(10), 1000);
  });

export const CounterPage = () => {
  const [initialCounter, setInitialCounter] = useState(99);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let id;
    getInitialCounter().then((initialCounter) => {
      setCounter(initialCounter);
      id = setInterval(() => {
        console.log("initial counter", initialCounter);
        setCounter((previousCounter) =>
          previousCounter > 0 ? previousCounter - 1 : previousCounter
        );
      }, 1000);
    });

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, []);

  return (
    <Wrapper>
      <CounterText>{counter}</CounterText>
      <div>
        <Button
          onClick={() => setCounter((previousCounter) => previousCounter - 1)}
        >
          -1
        </Button>
        <Button
          onClick={() => setCounter((previousCounter) => previousCounter + 1)}
        >
          +1
        </Button>
      </div>
      <Label>
        <span>Initial Counter</span>
        <Input
          value={initialCounter}
          onChange={(ele) => setInitialCounter(ele.target.value)}
        />
      </Label>
    </Wrapper>
  );
};

export default CounterPage;
