import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const Playerlist = () => {
    const playerData = [
        { name: "Vijay", age: 25, city: "Delhi" },
        { name: "Irfan", age: 27, city: "Hyderabad" },
        { name: "Ali",   age: 28, city: "Mumabi" },
        { name: "Kevin", age: 35, city: "Chennai" },
        
    ];

   

    return (
        <div>
        <NavBar />
        <ul>
            {playerData.map(item => <li>Click here to get the details of  <Link to={`/player/${item.name}`}>{item.name}</Link></li>)}

        </ul>
        </div>

    )
}

export default Playerlist;