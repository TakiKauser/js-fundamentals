var gotJob = true;
var moneySaved = 50000;
var haveTime = true;

// if(gotJob == true && moneySaved < 100000){
//     console.log("save money.");
// }
// else{
//     console.log("try to get a job.");
// }

// if(gotJob == true && moneySaved > 10000 && haveTime ==true){
//     console.log("let's travel.");
// }
// else{
//     console.log("try to get a job.");
// }

// if(gotJob == true || moneySaved > 100000 && haveTime ==true){
//     console.log("let's travel.");
// }
// else{
//     console.log("try to get a job.");
// }

if((gotJob == true && moneySaved > 100000) || haveTime ==true){
    console.log("let's go out for a travel.");
}
else{
    console.log("try to get a job.");
}