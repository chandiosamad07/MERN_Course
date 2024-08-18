import logo from "./logo.svg";
import "./App.css";
import {Greet,Morning}  from "./Components/Greet";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import EventHandling from "./Components/EventHandling";
import ConditionalRendering from "./Components/ConditionalRendering";
import Toggle from "./Components/Toggle";
import Namelist from "./Components/Namelist";
import CDM from "./LifeCycle/CDM";
import CWU from "./LifeCycle/CWU";
import CDU from "./LifeCycle/CDU";
import Form from "./Components/Form";
import CounterH from "./Hooks/Counter";
import Timer from "./Hooks/Timer";
import TimerStop from "./Hooks/TimerStop";
import ComponetC from "./Hooks/Context/ComponetC";
import React from 'react';
export const useContext = React.createContext()
function App() {
  return (
    <div className="App">
    <useContext.Provider value={"Abdul"}>
      <ComponetC />
      </useContext.Provider>
      {/* <TimerStop />
      <Timer /> */}
      {/* <CounterH /> */}
      {/* <Form /> */}
      {/* <CDU /> */}
      {/* <CWU /> */}
      {/* <CDM /> */}
      {/* <Namelist /> */}
{/* <Toggle /> */}
      {/* <ConditionalRendering loggedin = {false}/> */}
      {/* <EventHandling /> */}
      {/* <Counter /> */}
       {/* <Greet Fname="Abdul" lname="Samad"/> */}
    {/*  <Greet Fullname="Ebad"/>
      <Greet Fullname="Imran"/> */}
     
      {/* <Message  /> */}
      {/* <h1>Hello How are you</h1>
      <h1>npx createe-react-app learn-react</h1> */}
     
    </div>
  );
}

export default App;
