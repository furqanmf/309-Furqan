import { useState } from "react";
import NavBar from "../NavBar";

const ControlledComponentFormDemo = () => {

    const [state, setState] = useState({ age: 0, qualification: null });


    const handleEvent = (e) => {
        e.preventDefault();
    }

    // in functional component instead of creating individual state variables age,setAge.... create
    // a state object!
    // Like below
    // const [state,setState] = useState({age: 0, qualification:"Msc" });
    // then you will be able to use the simple one line handleChange   

    // we are using computed property feature of ES6.
    // This will allow to use setState for all of its form variables 
    // by dynamically computing the "keys" as [e.target.name]
    const handleChange = (e) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value })
    }



    //Handle submission. First prevent default backend submission
    //handleSubmit(e) {
    //e.preventDefault();
    //}

    return (
        <div style={{ border: "4px solid blue" }}>
            <NavBar />
            Controlled Form demo.
            <form id="form1" name="form1" action="process.php">
                Your age is : {state.age} <br />
                Your Qualification is : {state.qualification} <br />

                Enter Age: <input type="text" name="age" value={state.age} onChange={handleChange} />

                <br />

                Enter Qualification: <input type="text" name="qualification" value={state.qualification} onChange={handleChange} />

                <br />

                <button type="submit" name="button4" onClick={handleEvent}>Submit</button>

            </form><br />
        </div>
    )
}

export default ControlledComponentFormDemo;