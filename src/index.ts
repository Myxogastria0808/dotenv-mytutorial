import dotenv from 'dotenv';
import {
    checkIsString,
    checkIsStringAndConvertToNumber,
    checkIsStringAndConvertToBoolean,
    checkIsStringAndConvertToNull,
} from './types/dotenv';

dotenv.config();

const stringSample: string = checkIsString(process.env.STRING_SAMPLE);
const numberSample: number = checkIsStringAndConvertToNumber(process.env.NUMBER_SAMPLE);
const booleanSample: boolean = checkIsStringAndConvertToBoolean(process.env.BOOLEAN_SAMPLE);
const nullSample: null = checkIsStringAndConvertToNull(process.env.NULL_SAMPLE);

console.log(`stringSample: ${stringSample}\ntype: ${typeof stringSample}`);
console.log(`numberSample: ${numberSample}\ntype: ${typeof numberSample}`);
console.log(`booleanSample: ${booleanSample}\ntype: ${typeof booleanSample}`);
console.log(`nullSample: ${nullSample}\ntype: ${typeof nullSample}`);
