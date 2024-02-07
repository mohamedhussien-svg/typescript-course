var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const person = {
    name: 'Mohamed Hussein',
    age: 30,
    hopes: ['Sports', 'Movies'],
    role: Role.ADMIN
};
console.log(person.role);
function combine(input1, input2, returnType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1 + input2;
    }
    return returnType === 'as-number' ? +result : result;
}
let combineFunction = combine;
console.log(combineFunction(20, 60, 'as-number'));
console.log(combine('20', '60', 'as-text'));
function addAndHandle(input1, input2, cb) {
    const result = input1 + input2;
    cb(result);
}
addAndHandle(10, 220, (result) => {
    console.log(result);
});
const addArrow = (a, b = 2) => a + b;
const printArrow = (a) => console.log(a);
let htmlButtonElement = document.querySelector('button');
if (htmlButtonElement) {
    htmlButtonElement.addEventListener('click', (event) => {
        console.log(event);
    });
}
console.log(addArrow(2));
const hobbies = ['Sports', 'Music', 'Sleeping'];
const activeHobbies = ['Reading', ...hobbies];
activeHobbies.push(...hobbies);
const copyPerson = Object.assign({}, person);
const addMulti = (...numbers) => {
    return numbers.reduce((a, b) => {
        return a + b;
    }, 0);
};
console.log('Add Multi Numbers :-', addMulti(1, 2, 3, 4, 5));
const [hobby1, hobby2, ...remain] = hobbies;
const { name: username, age } = person;
export {};
