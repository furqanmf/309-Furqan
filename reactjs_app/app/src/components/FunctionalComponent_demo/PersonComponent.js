import { useState } from "react";
// using arrow function
const PersonComponent = (props) => {
    var initialScore = 0;
    const [score, setScore] = useState(initialScore);
    const changeScore = () => {
        setScore(score + 4)

    }

        //state of array type variable

    const [info, setInfo] = useState([511,"Football"]);



    return (
        <div style={{ border: "6px solid green" }}>HELLO I AM  {props.name} and MY SCORE IS {score}<br />
            <button style={{height:"35px", width:"100px"}} onClick={changeScore}>Change the score by 4 </button><br/><br/>

            INFORMATION = ID NO {info[0]}, HOBBY:{info[3]}<br/><br/>
            <button onClick={() => setInfo([610, ...info])}>CHANGE ID NUMBER</button><br/><br/>

        </div>
    );
}
export default PersonComponent;