import _ from 'lodash';
import 'reflect-metadata';
import {ProductModel} from "./product.model";
import * as Transformer from 'class-transformer';
import {validate, ValidationError} from 'class-validator';

const numbers = _.shuffle([1, 2, 3]);
console.log(numbers);

const prods = [{title: 'Java', price: 123}, {title: 'TypeScript', price: 543}];

const productModels = prods.map(x => new ProductModel(x.title, x.price));
const productModels1 = Transformer.plainToInstance(ProductModel, prods, {});

for (const productModel1 of productModels) {
    validate(productModel1).then((errors: ValidationError[]) => {
        if (errors.length > 0) {
            console.log('validation errors : ', errors);
        } else {
            console.log(productModel1.getInformation());
        }
    });
}

const productModel = new ProductModel('Iphone', 1500);
