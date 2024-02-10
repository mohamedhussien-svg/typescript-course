let hobbies: Array<string> = ['Reading', 'Sports'];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('its ok ya mo....')
    }, 2000)
})

promise.then((d) => console.log(d));

function combine<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

const combinedObj = combine<{ name: string }, { title: string }>({name: 'Mohamed'}, {title: 'Engineer'});
console.log(combinedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = '';
    if (!element) {
        description = 'Got no value '
    } else if (element.length === 1) {
        description = `Got 1 length`;
    } else if (element.length > 1) {
        description = `Got ${element.length} length`;
    }
    return [element, description];
}

console.log(countAndDescribe<string>('mohamed'));
console.log(countAndDescribe<string[]>(['mohamed', 'Ahmed']));
console.log(countAndDescribe<string>(''));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `value of ${obj[key]}`
}

console.log(extractAndConvert({name: 'Mohamed'}, 'name'));

class DataStorage<T extends string | number | boolean> {
    data: T[] = [];

    addData(item: T) {
        this.data.push(item);
    }

    removeData(item: T) {
        this.data.slice(this.data.indexOf(item), 1);
    }

    getData() {
        return {...this.data};
    }
}

const stringDataStorage = new DataStorage<string>();
stringDataStorage.addData('Mohamed');
stringDataStorage.addData('Ahmed');
console.log(stringDataStorage.getData());


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date
}

function createCourseGoal(course: Partial<CourseGoal>): CourseGoal {
    return {...course} as CourseGoal;
}

const names: Readonly<string[]> = ['Ali'];


