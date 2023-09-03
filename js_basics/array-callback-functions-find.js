const numbers = [0, 10, -4, 5, 2, -3];

console.log(numbers.find(x => x > 0)); // 10
console.log(numbers.find(x => x < 0)); // -4
console.log(numbers.find(x => x % 2 === 0)); // 0
console.log(numbers.find(x => x % 2 !== 0)); // 5
console.log(numbers.find(x => x > 100)); // undefined


console.log(numbers.findIndex(x => x > 0)); // 1
console.log(numbers.findIndex(x => x < 0)); // 2
console.log(numbers.findIndex(x => x % 2 === 0)); // 0
console.log(numbers.findIndex(x => x % 2 !== 0)); // 3
console.log(numbers.findIndex(x => x > 100)); // -1


// First positive               -> 10
// First negative               -> -4
// First even                   -> 0
// First odd                    -> 5
// First number more than 100   -> undefined

// The index of first positive              -> 1
// The index of first negative              -> 2
// The index of first even                  -> 0
// The index of first odd                   -> 3
// The index of first number more than 100  -> -1


const things = [ 'Knife', 'Spoon', 'Fork', 'Pan', 'Mug'];

/*
Find first element that has 3 letters with its index
{
    value: 'Pan',
    index: 3
}
*/

const result = things.map((v, i) => {
    return {
        value: v,
        index: i
    }
}).find(obj => obj.value.length === 3);

console.log(result);

/*
// ALTERNATIVE
const result = {
    value: things.find(x => x.length === 3),
    index: things.findIndex(x => x.length === 3)
};

console.log(result);
*/

/*
// ALTERNATIVE
for(let i = 0; i < things.length; i++){
    if(things[i].length === 3) {
        const result = {
            value: things[i],
            index: i
        }
        console.log(result);
        break;
    }
}
*/
