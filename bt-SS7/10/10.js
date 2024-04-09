"use strict";
function removeFalsyProperties(obj) {
    let result = {};
    for (let key in obj) {
        if (obj[key]) {
            result[key] = obj[key];
        }
    }
    return result;
}
let obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
let result = removeFalsyProperties(obj);
console.log(result);
