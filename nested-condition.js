var myBudget = 10;
var bikePrice = 6;
var laptopPrice = 2;
var cyclePrice = 1;
var haveTime = true;

if(cyclePrice < myBudget){
    console.log("Be a Cyclist.");
}
else if(laptopPrice < myBudget){
    console.log("Be a Programmer.");
}
else if(bikePrice < myBudget){
    console.log("Be a Biker.");
}
else{
    console.log("Earn money & be a great traveller.");
}

if(cyclePrice < myBudget){
    if(haveTime == true){
        console.log("Let's go out for a cycle tour.")
    }
}