"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const dotenv_2 = require("./types/dotenv");
dotenv_1.default.config();
const stringSample = (0, dotenv_2.checkIsString)(process.env.STRING_SAMPLE);
const numberSample = (0, dotenv_2.checkIsStringAndConvertToNumber)(process.env.NUMBER_SAMPLE);
const booleanSample = (0, dotenv_2.checkIsStringAndConvertToBoolean)(process.env.BOOLEAN_SAMPLE);
const nullSample = (0, dotenv_2.checkIsStringAndConvertToNull)(process.env.NULL_SAMPLE);
console.log(`stringSample: ${stringSample}\ntype: ${typeof stringSample}`);
console.log(`numberSample: ${numberSample}\ntype: ${typeof numberSample}`);
console.log(`booleanSample: ${booleanSample}\ntype: ${typeof booleanSample}`);
console.log(`nullSample: ${nullSample}\ntype: ${typeof nullSample}`);
