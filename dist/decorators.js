"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logStatement) {
    return function (constructor) {
        console.log(`Logger from Decorator :- ${logStatement}`);
        console.log(constructor);
    };
}
function WithTemplate(data) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const htmlElement = document.getElementById(data.hookId);
                if (htmlElement) {
                    htmlElement.innerHTML = data.template;
                    htmlElement.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Mohamed';
        console.log('Person created');
    }
};
Person = __decorate([
    WithTemplate({ template: '<h1>Hello Mohamed , How are you ?</h1>', hookId: 'app' }),
    Logger('Person Logging')
], Person);
const person = new Person();
// console.log(person);
//------
function Log(target, name) {
    console.log('Property Decorator');
    console.log('Property Decorator target:- ', target);
    console.log('Property Decorator name:- ', name);
}
function Log2(target, name, descriptor) {
    console.log('Accessor & Function Decorator');
    console.log('Accessor & Function Decorator target :- ', target);
    console.log('Accessor & Function Decorator name :- ', name);
    console.log('Accessor & Function Decorator descriptor : -', descriptor);
}
function Log3(target, name, position) {
    console.log('Parameter Decorator');
    console.log('Parameter Decorator target:- ', target);
    console.log('Parameter Decorator name:- ', name);
    console.log('Parameter Decorator position:- ', position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Invalid Price , should be positive');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log2,
    __param(0, Log3)
], Product.prototype, "getPriceWithTax", null);
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustableDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjustableDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This is works !';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const htmlButtonElement = document.querySelector('button');
htmlButtonElement.addEventListener('click', printer.showMessage);
//======================================================================================================
function Required(target, name) {
}
function PositiveNumber(target, name) {
}
function validate(object) {
    return false;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const htmlFormElement = document.querySelector('form');
htmlFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleElm = document.getElementById('title');
    const priceElm = document.getElementById('price');
    const course = new Course(titleElm.value, +priceElm.value);
    if (!validate(course)) {
        alert('Invalid Course Data');
    }
    console.log(course);
});
