const ReducerConceptDemo = () => {


    var counter = 0;

    const increment = (cnt = 0) => {
        counter = cnt + 1
        return counter
    }

    let val1 = increment(); //1
    console.log(val1);

    val1 = increment(); //2
    console.log(val1)

    val1 = increment(); //3
    console.log(val1)



    var nameOfRiver = "Yamuna";
    console.log(nameOfRiver)

    const changeToUpperCase = (nRvr = "") => {
        nameOfRiver = nRvr.toUpperCase();
        return nameOfRiver
    }

    changeToUpperCase(nameOfRiver);
    console.log(nameOfRiver);

    var someStr = "AaAa"
    const changeToUpperCase2 = (nRvr = "") => {
        someStr = someStr.changeToUpperCase();
        return nRvr;
    };

    var nameOfRiver2 = "Ganga"
    console.log("100" + nameOfRiver2)
    changeToUpperCase2(nameOfRiver2);
    console.log("101" + nameOfRiver2);

    var player = {
        name: "Pollard",
        age: 30,
        awards: ["National"]
    }

    const addAge = (plyr = {}) => {

        let newPlayer = { ...plyr };
        newPlayer.age = newPlayer.age + 5;
        return newPlayer;
    }
    console.log("before reducer")
    for (var i in player) {
        console.log(player[i]);
    }

    player = addAge(player);
    console.log("after reducer")

    for (var j in player) {
        console.log(player[j]);
    }


    /////

    var prevPlayer = [
        { name: "Pollard", age: 30, awards: "national" },
        { name: "Kevin", age: 35, awards: "district" }
    ]

    let addPlayer = (prevPlayer = [{}]) => {
        let { ...newPlayer } = prevPlayer;
        newPlayer.push({ name: "Viajay", age: 40, awards: "international" })
        return newPlayer;
    }

    console.log("name array old = " + prevPlayer);
    for (let player of prevPlayer) {
        for (let locPlayer in player) {
            console.log(player[locPlayer]);
        }

    }

    prevPlayer = addPlayer(prevPlayer);
    console.log("name after new array = " + prevPlayer);

    for (let player of prevPlayer) {
        for (let locPlayer in player) {
            console.log(player[locPlayer]);
        }
    }
    ////////////class assignment

    var plyArr1 = [{
        name: "player1",
        age: 28,
        awards: "National"
    },
    {
        name: "player2",
        age: 35,
        awards: "International"
    },
    {
        name: "player3",
        age: 42,
        awards: "district"
    }]



    const addNewPlayer2 = (plyrArr3 = [{}], strAction) => {
        if (strAction === "ADD_ONE") {
            let [...newArr3] = plyrArr3;
            newArr3.push({ name: "Uma", age: 40, awards: "state" });
            return newArr3;
        }
        else if (strAction === "ADD_TWO") {
            let [...newArr3] = plyrArr3;
            newArr3.push({ name: "player4", age: 30, awards: "national" });
            newArr3.push({ name: "player5", age: 30, awards: "district" });

            return newArr3;

        }

    }

    console.log("name array old = " + plyArr1);
    for (let i = 0; i < plyArr1.length; i++) {
        for (let locPlayer in plyArr1) {
            console.log(plyArr1[locPlayer]);
        }
    }

    plyArr1 = addNewPlayer2(plyArr1, "ADD_TWO");
    console.log("name after new array = " + plyArr1);

    for (let i = 0; i < plyArr1.length; i++) {
        for (let locPlayer in plyArr1) {
            console.log(plyArr1[locPlayer]);
        }
    }


    return (
        <div>Reducer starter demo</div>
    )

    }



// increment is a function that takes current state of a variable
//and changes its state (by adding 1 , or by some number),
// and return a new state
// ......are called reducers

export default ReducerConceptDemo;