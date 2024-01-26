import { useState , useEffect } from "react";
import { Wrapper, CounterText, Button } from "./Components";

export const CounterPage = () => {
  const [counter, setCounter] = useState(10);


  

  return (
    <Wrapper>
      <CounterText>{counter}</CounterText>
      <div>
        <Button onClick={() => setCounter((previousCounter) => previousCounter -1)}>-1</Button>
        <Button onClick = {() => setCounter((previousCounter) => previousCounter + 1)}>+1</Button>
      </div>
    </Wrapper>
  );
};

export default CounterPage;
