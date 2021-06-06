function forest(animal){
    var animals=0;
    if(animal <= 10){
        animals = animal * 50; 
    }
    else if(animal <= 20){
        var first = 50 * 10;
        var withOutFirst10Maile = animal - 10;
        second = 100 * withOutFirst10Maile;
        animals = first + second;
    }else{
        var first = 50 * 10;
        var second = 10 * 100;
        var withOutFirst20Maile = animal - 20;

        third = 300*withOutFirst20Maile;

        animals = first+second+third;
    }
    return animals;
}

console.log(forest(22));
