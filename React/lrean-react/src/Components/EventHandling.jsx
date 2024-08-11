import React from 'react'

 const EventHandling = () => {

  const handleClick = () =>{
        console.log("Button Clicked")
        alert("button clicked")

    }
  return (
   <button onClick={()=>handleClick()}>Click Me</button>
  )
}

export default EventHandling