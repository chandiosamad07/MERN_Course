import React, { useEffect, useState } from "react";

const TimerStop = () => {
  const [sconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds((sconds) => {
          if(sconds>= 10){
              clearInterval(interval)
              return sconds
          }
          return sconds+1
        });
      }, 1000);

    //    return ()=> clearInterval(interval)
  }, []);
  return <div>Timer {sconds}</div>;
};

export default TimerStop;
