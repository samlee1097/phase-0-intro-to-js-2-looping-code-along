function writeCards(names, event){
    const newGifts = [];
    for(let counter = 0; counter < names.length; counter++){ //Iterates equal to the number of names in array
        newGifts[counter] = `Thank you, ${names[counter]}, for the wonderful ${event} gift!`;
    }
    return newGifts;
};

function countDown(number){
    let i = 0;
    while(i <= number){ //Set equal to 0 in order to return 0 as well
        console.log(number);
        number--;
    }
};