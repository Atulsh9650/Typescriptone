"use strict";
const func2 = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func2(1, 2);
const getdata = (product) => {
    console.log(product);
};
const productone = {
    name: "macbook",
    stock: 40,
    price: 3000,
    photo: "sampleproduct",
};
getdata(productone);
