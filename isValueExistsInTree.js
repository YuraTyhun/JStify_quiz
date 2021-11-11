const arr1 = [3, [8, [5, null, null], null], [7, null, null]];

//#1
function helper(arr, res = []) {
    for(let el of arr) {
        if(Array.isArray(el)) helper(el, res);
        else if(el === null) continue;
        else res.push(el);
    }
    return res;
}

const isValueExistsInTree = (arr, value) => helper(arr).includes(value);

//#2
const isValueExistsInTree = (arr, value) => arr.flat(Infinity).includes(value);

//#3
const isValueExistsInTree = (arr, value) => {
   let arrIntoString = JSON.stringify(arr).replace(/\[|\]|,null/g,'');
   return JSON.parse(`[${arrIntoString}]`).includes(value);
}

console.log(isValueExistsInTree(arr1, 5));
console.log(isValueExistsInTree(arr1, 9));
console.log(isValueExistsInTree(arr1, 7));
console.log(isValueExistsInTree(arr1, 51));
