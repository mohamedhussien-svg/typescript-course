"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
require("reflect-metadata");
const product_model_1 = require("./product.model");
const Transformer = __importStar(require("class-transformer"));
const class_validator_1 = require("class-validator");
const numbers = lodash_1.default.shuffle([1, 2, 3]);
console.log(numbers);
const prods = [{ title: 'Java', price: 123 }, { title: 'TypeScript', price: 543 }];
const productModels = prods.map(x => new product_model_1.ProductModel(x.title, x.price));
const productModels1 = Transformer.plainToInstance(product_model_1.ProductModel, prods, {});
for (const productModel1 of productModels) {
    (0, class_validator_1.validate)(productModel1).then((errors) => {
        if (errors.length > 0) {
            console.log('validation errors : ', errors);
        }
        else {
            console.log(productModel1.getInformation());
        }
    });
}
const productModel = new product_model_1.ProductModel('Iphone', 1500);
