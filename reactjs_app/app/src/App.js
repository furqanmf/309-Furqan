// import logo from './logo.svg';
import "./App.css";
import Person from "./components/Person";
import User from "./components/User";
import User2 from "./components/User2";

import Address from "./components/Address";
import Hobby from "./components/Hobby";
import Qualification from "./components/Qualification"
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import LifeCycleDemo from "./components/lifecycledemo/Demo";
import Fruits from "./components/context-demo/Fruit";
import FruitContext from "./components/context-demo/FruitContext";
import Greeting from "./components/FunctionalComponent_demo/Greeting";
import GreetingES6 from "./components/FunctionalComponent_demo/GreetingES6";
import PersonComponent from "./components/FunctionalComponent_demo/PersonComponent";
import ScoreBoardComponent from "./components/FunctionalComponent_demo/ScoreboardComponents";
import HelloWorld from "./HelloWorld"
import MyEventHandling from "./components/event-handling-demo/MyEventHandling";
import FormDemo1 from "./components/form-handling/FormDemo1";
import ControlledComponentFormDemoWithMoreFormElements from "./components/form-handling/ControlledComponentFormDemoWithMoreFormElements"
import ControlledComponentFormDemo from "./components/form-handling/ControlledComponentFormDemo";
import PlayerRegisteration from "./components/form-handling/PlayerRegisteration";
import { Route, Routes } from "react-router";
import NoPageFound from "./components/NoPageFound";
import HelloWorldFunc from "./components/HelloWorldFunc";
import PlayerDetails from "./components/PlayerDetails";
import NavBar from "./components/NavBar";
import Playerlist from "./components/PlayerList";
// import Player from "./components/Player";



function App() {
  return (
    <Routes>
  
    <Route path="/" element={<Home />} />

    {/* nested routing demo.............................. */}
    <Route path="/test" element={<GreetingES6 />}>
      <Route path="form-demos1" element={<ControlledComponentFormDemo />} />
      <Route path="form-demos2" element={<ControlledComponentFormDemoWithMoreFormElements />} />
      <Route path="form-demos3" element={<FormDemo1 />} />
    </Route>

    {/* Demo params */}
    <Route path="/hello/:city" element={<HelloWorldFunc />} />
    <Route path="/hello2/:city" element={<HelloWorldFunc name="Furqan" />} />
    <Route path="/hello2/:city/:country" element={<HelloWorldFunc name="Furqan" />} />

    <Route path="/player/:name" element={<PlayerDetails name="" />} />
    <Route path="/player/:name/:age" element={<PlayerDetails name="" />} />
    <Route path="/player/:name/:age/:role" element={<PlayerDetails name="" />} />
    <Route path="/player/:name/:age/:role/:country" element={<PlayerDetails name=""/>} />
    <Route path="/player/:name/:age/:role/:country/:totRuns" element={<PlayerDetails name="" />} />





    <Route path="/apps" element={<App1 />} />
    <Route path="/players" element={<Playerlist />} />
    <Route path="/form-demos" element={<PlayerRegisteration />} />
    <Route path="/form-demos1" element={<ControlledComponentFormDemo />} />
    <Route path="/form-demos2" element={<ControlledComponentFormDemoWithMoreFormElements />} />
    <Route path="/form-demos3" element={<FormDemo1 />} />
    <Route path="*" element={<NoPageFound />} />
  </Routes>
  
)
};

function Home() {
return (
  <NavBar />
  // <div>
  //   <Link style={{ margin: "20px" }} to="/">Home</Link>
  //   <Link style={{ margin: "20px" }} to="/apps">App1</Link>
  //   <Link style={{ margin: "20px" }} to="/form-demos">PlayerRegistration</Link>
  //   <Link style={{ margin: "20px" }} to="/form-demos1">ControlledFormDemo</Link>
  //   <Link style={{ margin: "20px" }} to="/form-demos2">ControlledFormDemoWithMore</Link>
  //   <Link style={{ margin: "20px" }} to="/form-demos3">FormDemo</Link>
  // </div>

  //  <div>
  //   <NavLink style={{ margin: "20px" }} to="/">Home</NavLink>
  //   <NavLink style={{ margin: "20px" }} to="/apps">App1</NavLink>
  //   <NavLink style={{ margin: "20px" }} to="/form-demos">PlayerRegistration</NavLink>
  //   <NavLink style={{ margin: "20px" }} to="/form-demos1">ControlledFormDemo</NavLink>
  //   <NavLink style={{ margin: "20px" }} to="/form-demos2">ControlledFormDemoWithMore</NavLink>
  //   <NavLink style={{ margin: "20px" }} to="/form-demos3">FormDemo</NavLink>
  // </div>
)
}

function App1() {
return (
    
    <FruitContext.Provider value={{ x: 2, y: 5 }}>
    <NavBar />

     {/* router demo */}

    {/* event handling */}

    <ControlledComponentFormDemoWithMoreFormElements />
  
    <ControlledComponentFormDemo />

    <PlayerRegisteration />

    <MyEventHandling />

    <FormDemo1 />
 
   
    


      
      {/* functional coponent */}
      <Greeting name="FURQAN" />
      <GreetingES6 name="FURQAN" />
      <PersonComponent name="FURQAN" />
      <ScoreBoardComponent />
      <HelloWorld />

      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          Hello FURQAN
          {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to Learn React
          </a>
          <User name="Furqan" />
          <User name="Ali" />
          <Person
            name="Furqan"
            popularity={1}
            image="images/logo192.png"
            email="xyz1@gmail.com"
          />
          <ScoreBoard  >
            {/* <Player name="FURQAN" score={60} /> */}
            {/* <Player name="XYZ"  score={80}/> */}
          </ScoreBoard>
          <LifeCycleDemo name="FURQAN" />
          <Fruits />

          {/* //user 2 component is coded such a way that it will render all the children component 
            //therefore we can pass any number(even zero) of hobby,qualification,address
            //components as its children  */}
          <User2 name="Ali">
            <Address address={["Hyd", "Secbad", "Gachibowli"]} />
            <Hobby hobby={["Football", "Surfin on Net"]} />
            <Qualification qualification={["B.Tech", "M.Tech"]} />

          </User2>

          {/* //inside this user2 we are only passing address, hobby
            // children */}

          <User2 name="Ahmed">
            <Address address={["Hyd", "Secbad", "Gachibowli"]} />
            <Hobby hobby={["Football", "Surfin on Net"]} />

          </User2>
        </header>
      </div>
    </FruitContext.Provider>

  );
}

export default App;