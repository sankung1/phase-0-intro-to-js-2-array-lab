// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//cats.push("Ralph");

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const newCat = [...cats, "Broom"];
    return newCat;
}

function prependCat(){
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat(){
    const newCats = cats.slice(0,2);
    return newCats;
}

function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}