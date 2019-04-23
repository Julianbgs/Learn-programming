function twoTeams() {
    // var teams = {
    //     "foo" : 123456,
    //     "bar" : 789012,
    //     "baz" : 345678,
    //     "bat" : 901234
    // };
var teams = {
    'Smith': 34,
    'Wesson': 22,
    'Coleman': 45,
    'Abrahams': 19};

var firstTeam = [];
var secondTeam = [];

//     teams.forEach(( (item) => {
//         console.log(item.age);
//         if (item.age < 35 && item.age > 18){
//             item.age.push(firstTeam);
//             console.log(firstTeam);
//         }
//
// }));

    // teams.forEach((item) => {
    //     console.log(item.age);
    // if (item.age < 35 && item.age > 18){
    //     firstTeam = [item.age];
    //     console.log(firstTeam);
    // }
    //
    //
    // });

    // for(var item of teams){
    //  console.log(item.age);
    //     if (item.age < 35 && item.age > 18){
    //             firstTeam.push(item);
    //
    //         }else{
    //         secondTeam.push(item);
    //
    //     }
    // }
    // console.log(firstTeam);
    // console.log(secondTeam);
    for(var item in teams){

        if (teams[item] > 20 && teams[item] < 40){
            firstTeam.push(item);
        } else {
            secondTeam.push(item);
        }
    }
    firstTeam.sort();
    secondTeam.sort();
    console.log(firstTeam);
    console.log(secondTeam);

}

twoTeams();
