import logo from "./logo.svg";
import "./App.css";
import {Greet,Morning}  from "./Components/Greet";
import Message from "./Components/Message";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
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
