import Immutable from 'immutable';

var initialPlayers = [{
    name: "player0",
    age: 26,
    awards: ["State","National"]
},
{
    name: "player1",
    age: 27,
    awards: ["State","International"]
},
{
    name: "player2",
    age: 28,
    awards: ["State","District"]
},
{
    name: "player3",
    age: 29,
    awards: ["State","National"]
}
];

const PlayerReducer = (state = initialPlayers, action) =>{
    switch(action.type){
        case "ADD_ONE":
            // let [...newState1] = state;
            // newState1.push({ name: "player0",
            // age: 26,
            // awards: ["State","National"]});
            // return newState1;



            //using immutable JS wew can do it in one line
            return Immutable.List(state).push({name: "player4",
            age: 30,
            awards: ["National","International"]});

        case "ADD_TWO":
            // let [...newState2] = state;
            // newState2.push({ name: "player1",
            // age: 27,
            // awards: ["State","International"]});
            // newState2.push({ name: "player2",
            // age: 28,
            // awards: ["State","District"]});
            // return newState2;

            return Immutable.List(state).push({name: "Player5",
            age: 24,
            awards: ["State","District"]},{name: "Player6",
            age: 24,
            awards: ["State","National"]});

            

        case "REMOVE_LAST":
            // let [...newState3] = state;
            return Immutable.List(state).pop();
            // return newState3

        case "REMOVE_NAME":
            let pName = action.playerName;
            let [...newState4] = state;
            newState4 = newState4.filter(item => item.name !== pName);
            return newState4


            case "REMOVE_BY_AGE":
                // console.log("action"+action.playerAge);
                let pAge = action.playerAge;
                let [...newState5] = state;
                newState5 = newState5.filter(item =>  item.age !== pAge);
                // console.log("latest"+newState5);
                return newState5
                
            
            

        default:
            return state;   

    };
}

export default PlayerReducer;