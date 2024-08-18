import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [sconds , setSeconds] = useState(0)

    useEffect(()=>{
      const interval = setInterval(()=>{
        setSeconds(count =>count +1)   
       },1000)
   
        //    return ()=> clearInterval(interval)
        },[])
  return (
    <div>Timer {sconds}</div>
  )
}

export default Timer