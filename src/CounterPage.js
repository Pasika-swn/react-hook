import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";

export const CounterPage = () => {
  const [initialCounter, setInitialCounter] = useState(99);
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    setCounter(initialCounter)

    setInterval(() => {
      setCounter((previousCounter) =>
        previousCounter > 0 ? previousCounter - 1 : previousCounter
      );
    }, 1000);
  }, [initialCounter]);

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
          value = {initialCounter}
          onChange={(ele) => setInitialCounter(ele.target.value)}
        />
      </Label>
    </Wrapper>
  );
};

export default CounterPage;
