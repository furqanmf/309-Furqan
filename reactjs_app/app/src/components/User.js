import { Component } from "react";
import Address from "./Address";
import Hobby from "./Hobby";
import Qualification from "./Qualification"

class User extends Component {
  render() {
    return (
      <div>
        <h2>My Name Is {this.props.name}</h2>
        <Address address={["Hyd", "Secbad", "Gachibowli"]} />
        <Hobby hobby={["Football", "Surfing on Net"]} />
        <Qualification qualification={["B.Tech", "M.Tech"]} />

        You are from
      </div>
    );
  }
}

export default User;

// normal approach