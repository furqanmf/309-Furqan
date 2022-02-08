import { useParams } from "react-router";
import { useEffect, useState } from "react";

const PlayerDetails = (props) => {
const playerData = [
    { name: "Vijay", age: 25 },
    { name: "Irfan", age: 27 },
    { name: "Ali", age: 28 },
    { name: "Kevin", age: 35 },
];


const playerName = (name) => {
    for (let i = 0; i < playerData.length; i++) {
        if (playerData[i].name === name) return playerData[i];
    }
    return null;
}

const { name, age } = useParams();
const [player1, setPlayer1] = useState({});

useEffect(() => {
    setPlayer1(playerName(name));
    console.log("Inside use effect")
    console.log('player1 details', + player1.name);

},
// eslint-disable-next-line react-hooks/exhaustive-deps
[player1],
);

let player2 = playerName(name);

return (
    <div>
        <p>I am {name} <br /> My age is {age}</p>
        <br /> You are in our database : (Solution 1)
        {
            playerName(name) !=null ?
            <p>{playerName(name).age}</p>
            :<p>Player Not Found </p>
        }
       solution 2 (based on useEffect):
            {
                player1 ? player1.name : "Not Found"
            }<br /><br />

            solution 3 (based on useEffect):
            {
                player2 ? player2.name : "Not Found"
            }

        </div>
    )
}

export default PlayerDetails;





 