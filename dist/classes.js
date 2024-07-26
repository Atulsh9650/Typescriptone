"use strict";
//classes
class Player {
    constructor(height, weight) {
        this.weight = weight;
        this.height = height;
    }
}
const abhi = new Player(30, 40);
//Type Assertion
// const btn=<HTMLElement>document.getElementById('btn');
const btn = document.getElementById('btn');
btn.onclick;
const person1 = {
    name: "abhi",
    email: "abhi@gmal.com"
};
const getName = () => {
    return person1.name;
};
const getemail = () => {
    return person1.email;
};
const getdataperson = (key) => {
    return person1[key];
};
console.log(getdataperson("name"));
