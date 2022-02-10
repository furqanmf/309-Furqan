import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "./NavBar";

const PlayerDetails = (props) => {
    const playerData = [
        { name: "Vijay", age: 25, role: "Batsman", country: "India", totRuns: 70000 },
        { name: "Irfan", age: 27, role: "Bowler", country: "India", totRuns: 20000 },
        { name: "Ali", age: 28, role: "All rounder", country: "India", totRuns: 45000 },
        { name: "Kevin", age: 35, role: "Batsman", country: "India", totRuns: 50000 },
    ];


    const playerName = (name) => {
        for (let i = 0; i < playerData.length; i++) {
            if (playerData[i].name === name) return playerData[i];
        }
        return null;
    }
    <NavBar />
    const { name, age, role, country, totRuns } = useParams();
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const [player1, setPlayer1] = useState({});

    useEffect(() => {
        setPlayer1(playerName(name));
        console.log("Inside use effect")
        console.log('player1 details', + player1.name);

    },
        [player1.name],
    );

    let player2 = playerName(name);

    return (
        <div>
            <p>I am {name} <br /> My age is {age} <br /> My role in the team is {role ? role : ""} <br />I am from {country ? country : ""} <br />I have made total {totRuns ? totRuns : ""} runs</p><br />
            <br /> You are in our database : (Solution 1)
            {
                playerName(name) != null ?
                    <p>{playerName(name).age}</p>
                    : <p>Player Not Found </p>
            }
            solution 2 (based on useEffect):
            {
                player1 ? player1.name : "Not Found"
            }<br /><br />

            solution 3 (based on useEffect):
            {
                player2 ? player2.name : "Not Found"
            }
         
         <br /> Search params: {searchParams}
        </div>
    );
}

export default PlayerDetails;





