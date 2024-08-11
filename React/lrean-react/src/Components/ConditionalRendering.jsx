import React from 'react'

 const ConditionalRendering = (props) => {

    return(props.loggedin?<h1>Welcome Back</h1>:<h1>Please log in</h1>)
//  if(props.loggedin == "abdul"){
//     return (
//         <h1>Welcome Abdul</h1>
//       )
//  }
//  else{
//     return (
//         <h1>Please login in Your Account</h1>
//       )
//  }
}

export default ConditionalRendering