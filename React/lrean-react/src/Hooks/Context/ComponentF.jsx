import React from 'react'
import {useContext} from '../../App'
const ComponentF = () => {
  return (
    <div>
         <useContext.Consumer>
        {
       
        user =>{
         return  <h1> Hello this is context {user}</h1>
        }
        }
        </useContext.Consumer></div>
  )
}

export default ComponentF