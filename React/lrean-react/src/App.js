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

function App() {
  return (
    <div className="App">
      <Form />
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
