"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsStringAndConvertToNull = exports.checkIsStringAndConvertToBoolean = exports.checkIsStringAndConvertToNumber = exports.checkIsString = void 0;
const checkIsString = (constant) => {
    if (typeof constant === 'string') {
        return constant;
    }
    else {
        throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
};
exports.checkIsString = checkIsString;
const checkIsStringAndConvertToNumber = (constant) => {
    if (typeof constant === 'string') {
        try {
            return Number(constant);
        }
        catch (_e) {
            throw new Error('This constant can not convert to number.');
        }
    }
    else {
        throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
};
exports.checkIsStringAndConvertToNumber = checkIsStringAndConvertToNumber;
const checkIsStringAndConvertToBoolean = (constant) => {
    if (typeof constant === 'string') {
        try {
            return Boolean(constant);
        }
        catch (_e) {
            throw new Error('This constant can not convert to boolean.');
        }
    }
    else {
        throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
};
exports.checkIsStringAndConvertToBoolean = checkIsStringAndConvertToBoolean;
const checkIsStringAndConvertToNull = (constant) => {
    if (typeof constant === 'string') {
        if (constant === 'null') {
            return null;
        }
        else {
            throw new Error('This constant can not convert to null.');
        }
    }
    else {
        throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
};
exports.checkIsStringAndConvertToNull = checkIsStringAndConvertToNull;
