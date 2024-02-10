function Logger(logStatement: string) {
    return function (constructor: Function) {
        console.log(`Logger from Decorator :- ${logStatement}`);
        console.log(constructor);
    }
}

function WithTemplate(data: { template: string; hookId: string }) {
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const htmlElement = document.getElementById(data.hookId);
                if (htmlElement) {
                    htmlElement.innerHTML = data.template;
                    htmlElement.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@WithTemplate({template: '<h1>Hello Mohamed , How are you ?</h1>', hookId: 'app'})
@Logger('Person Logging')
class Person {
    name: string = 'Mohamed';

    constructor() {
        console.log('Person created');
    }
}

const person = new Person();
// console.log(person);

//------
function Log(target: any, name: string | Symbol) {
    console.log('Property Decorator')
    console.log('Property Decorator target:- ', target);
    console.log('Property Decorator name:- ', name);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor & Function Decorator');
    console.log('Accessor & Function Decorator target :- ', target);
    console.log('Accessor & Function Decorator name :- ', name);
    console.log('Accessor & Function Decorator descriptor : -', descriptor);
}

function Log3(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator')
    console.log('Parameter Decorator target:- ', target)
    console.log('Parameter Decorator name:- ', name)
    console.log('Parameter Decorator position:- ', position)
}


class Product {
    @Log
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log2
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            throw new Error('Invalid Price , should be positive');
        }
    }

    @Log2
    getPriceWithTax(@Log3 tax: number) {
        return this._price * (1 + tax);
    }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustableDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(): any {
            return originalMethod.bind(this);
        }
    }
    return adjustableDescriptor;
}

class Printer {
    message: string = 'This is works !';

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const printer = new Printer();
const htmlButtonElement = document.querySelector('button')! as HTMLButtonElement;
htmlButtonElement.addEventListener('click', printer.showMessage)

//======================================================================================================
function Required(target: any, name: string | Symbol) {
}

function PositiveNumber(target: any, name: string | Symbol) {
}

function validate(object: any): boolean {
    return false;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const htmlFormElement = document.querySelector('form')! as HTMLFormElement;
htmlFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleElm = document.getElementById('title')! as HTMLInputElement;
    const priceElm = document.getElementById('price')! as HTMLInputElement;

    const course = new Course(titleElm.value, +priceElm.value);
    if (!validate(course)) {
        alert('Invalid Course Data')
    }
    console.log(course)

})
