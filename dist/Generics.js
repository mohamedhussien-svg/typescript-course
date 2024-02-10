"use strict";
let hobbies = ['Reading', 'Sports'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('its ok ya mo....');
    }, 2000);
});
promise.then((d) => console.log(d));
function combine(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const combinedObj = combine({ name: 'Mohamed' }, { title: 'Engineer' });
console.log(combinedObj);
function countAndDescribe(element) {
    let description = '';
    if (!element) {
        description = 'Got no value ';
    }
    else if (element.length === 1) {
        description = `Got 1 length`;
    }
    else if (element.length > 1) {
        description = `Got ${element.length} length`;
    }
    return [element, description];
}
console.log(countAndDescribe('mohamed'));
console.log(countAndDescribe(['mohamed', 'Ahmed']));
console.log(countAndDescribe(''));
function extractAndConvert(obj, key) {
    return `value of ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Mohamed' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addData(item) {
        this.data.push(item);
    }
    removeData(item) {
        this.data.slice(this.data.indexOf(item), 1);
    }
    getData() {
        return Object.assign({}, this.data);
    }
}
const stringDataStorage = new DataStorage();
stringDataStorage.addData('Mohamed');
stringDataStorage.addData('Ahmed');
console.log(stringDataStorage.getData());
function createCourseGoal(course) {
    return Object.assign({}, course);
}
const names = ['Ali'];
