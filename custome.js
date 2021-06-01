function feetToMile(feet){
    if(feet <= 0){
        return 'you have given false value';
    }else{
       var mile = feet / 5280;
       return feet+' feet = '+mile+' mile';
    }
}

var input = feetToMile(10560);
console.log(input);


function woodCalculator(chair,table,bed){
    if(chair !== 0){
        var woodOfChair=chair * 1;
    }
    if(table !== 0){
        var woodOfTable = table * 3;
    }
    if(bed !== 0){
        var woodOfBed = bed * 5;
    }
    var total = woodOfChair+woodOfTable+woodOfBed;
    return 'You need total '+total+' qubid wood';
    
}
var wood = woodCalculator(20,10,5);
console.log(wood);


function brickCalculator(brick){
    if(brick > 10){
        var above10 = brick - 10;
        var brickCountOf1 = 1000 * 10;

        var allBrickCountOfAbove10 = above10 * brickCountOf1;

        var brickCountOf1DownOf10 = 1000 * 15;
        var allBrickCountOfDown10 = brickCountOf1DownOf10 * 10;

        var brickCountOfBuilding = allBrickCountOfAbove10 + allBrickCountOfDown10;

        return brickCountOfBuilding;

    }
    else{
        var brickCountOf1DownOf10 = 1000 * 15;

        var brickCountOfBuilding = brickCountOf1DownOf10 * brick;

        return brickCountOfBuilding;
    }
} 


var brickOfBuilding = brickCalculator(8);

console.log(brickOfBuilding);



function tinyFriend(friend){
    var small = friend[0];

    for(i = 0;i < friend.length;i++){
        var countNameLetter = friend[i].length;
        if(countNameLetter < small.length){
            small = friend[i];
        }
    }
    return small;
}
var friends = ['emon','gobindo','antar','he'];
var tiny = tinyFriend(friends)
console.log(tiny);