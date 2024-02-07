import * as events from "events";

type Combinable = number | string;
type ReturnableType = 'as-number' | 'as-text';
type User = {
    name: string,
    age: number,
    hopes: string[],
    role: Role

};

enum Role {
    ADMIN, USER, GUEST
}

const person: User = {
    name: 'Mohamed Hussein',
    age: 30,
    hopes: ['Sports', 'Movies'],
    role: Role.ADMIN
}
console.log(person.role);

function combine(input1: Combinable,
                 input2: Combinable,
                 returnType: ReturnableType) {

    let result: any;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1 as string + input2 as string;
    }
    return returnType === 'as-number' ? +result : result as string;
}


let combineFunction: (a: Combinable, b: Combinable, c: ReturnableType) => string | number = combine;

console.log(combineFunction(20, 60, 'as-number'))
console.log(combine('20', '60', 'as-text'))

function addAndHandle(input1: number, input2: number, cb: (result: number) => void) {
    const result = input1 + input2;
    cb(result);
}

addAndHandle(
    10,
    220,
    (result) => {
        console.log(result);
    });

const addArrow = (a: number, b: number = 2) => a + b;
const printArrow: (a: string | number) => void = (a: string | number) => console.log(a);
let htmlButtonElement = document.querySelector('button') as HTMLInputElement;
if (htmlButtonElement) {
    htmlButtonElement.addEventListener('click', (event) => {
        console.log(event)
    })
}

console.log(addArrow(2))
const hobbies = ['Sports', 'Music', 'Sleeping'];
const activeHobbies = ['Reading', ...hobbies];
activeHobbies.push(...hobbies);

const copyPerson = {...person};
const addMulti = (...numbers: number[]) => {
    return numbers.reduce((a, b) => {
        return a + b
    }, 0);
}
console.log('Add Multi Numbers :-', addMulti(1, 2, 3, 4, 5));

const [hobby1, hobby2, ...remain] = hobbies;
const {name: username, age} = person;
