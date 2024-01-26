import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button } from "./Components";

export const CounterPage = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    //ถูกรันตอนครั้งแรกที่ cpn มีการ mount
    // setInterval(() => {
    //   setCounter(counter - 1)
    // }, 1000)
    //----notice---- there is some bugs (lagging) -> bc โดนรัน interval ซ้ำๆในเวลาเหลื่อมกัน

    //-how to fix-// -> using function instead
    setInterval(() => {
      setCounter((previousCounter) => previousCounter > 0 ? previousCounter - 1 : previousCounter);
    }, 1000);
  }, []); //กำหนด dependency -> [] -> it should be run just once

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
    </Wrapper>
  );
};

export default CounterPage;
