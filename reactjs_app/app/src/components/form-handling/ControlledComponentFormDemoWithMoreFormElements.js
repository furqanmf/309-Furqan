import React, { Component } from "react";
import NavBar from "../NavBar";

class ControlledComponentFormDemoWithMoreFormElements extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            age: 0,
            qualification: "Msc",
            genderOptions: ["male", "female"],
            gender: "male",
            hobbiesOptions: ["Cooking", "Singing", "Cricket", "Tennis"],
            hobbies: [],
            msg: "errors will be shown here"
        }
    }

    handleChange(e) {
        //React batches all the setState statements and executes only once. This means that
        // if we have two or more setState statements, only the last setState will be effected.
        // To avoid this issue, we create a new local state object (newState below). Apply the
        // changes to this local state till the end.
        // Finally set the state with the updated local state.
        let newState = { ...this.state, msg: "" };

        if (e.target.name === "hobbies") {
            if (e.target.checked)
                this.state.hobbies.push(e.target.value);
            else if (!e.target.checked)
                this.setState.state.hobbies = this.state.hobbies.filter(elem => elem !== e.target.value);

            let [...nwHobbies] = this.state.hobbies;
            //this.setState({...State, hobbies: nwHobbies});
            newState = { ...newState, hobbies: nwHobbies }
        }
        else {
            //age validation
            if (e.target.name === "age" && e.target.value < 21) {
                //this.setState({...this.state,msg: "Age cannot be less 21 for player registration"});
                newState = { ...newState, msg: "Age cannot be less 21 for player registration" }
            };
            //this.setState({...this.state, [e.target.name]: e.target.value });
            newState = { ...newState, [e.target.name]: e.target.value }

        }

        this.setState({ ...newState });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div style={{ border: "5px solid orange" }}>
               <NavBar />
                ControlledComponent FormDemo With More Form Elements
                <hr style={{ "border": "1px dashed green" }} />
                Validation Messages : <span style={{ color: "red" }}> {this.state.msg} </span>
                <form id="form1" name="form1" onSubmit={this.handleSubmit} action="process.php">
                    Enter Age: <input type="text" name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <br />Enter Qualification: <input type="text" name="qualification"
                        value={this.state.qualification}
                        onChange={this.handleChange}
                    />
                    <br />Gender:
                    <input type="radio" name="gender" value={this.state.genderOptions[0]} onChange={this.handleChange} /> Male
                    <input type="radio" name="gender" value={this.state.genderOptions[1]} onChange={this.handleChange} /> Female

                    <br />Hobbies:
                    <input type="checkbox" name="hobbies" value={this.state.hobbiesOptions[0]} onChange={this.handleChange} /> Cooking
                    <input type="checkbox" name="hobbies" value={this.state.hobbiesOptions[1]} onChange={this.handleChange} /> Singing
                    <input type="checkbox" name="hobbies" value={this.state.hobbiesOptions[2]} onChange={this.handleChange} /> Cricket
                    <input type="checkbox" name="hobbies" value={this.state.hobbiesOptions[3]} onChange={this.handleChange} /> Tennis

                    <button type="submit" name="button1">Submit</button>
                </form>

                <br />Your age is : {this.state.age}
                <br />Your Qualification is : {this.state.qualification}
                <br />Your Gender is : {this.state.gender}
                <br />Your Hobbies are : {this.state.hobbies.join(", ")}
                <hr style={{ "border": "1px dashed green" }} />
            </div>
        )
    }

};

export default ControlledComponentFormDemoWithMoreFormElements;