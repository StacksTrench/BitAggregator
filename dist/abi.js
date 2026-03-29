"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicFunctions = getPublicFunctions;
exports.getReadOnlyFunctions = getReadOnlyFunctions;
exports.findFunction = findFunction;
function getPublicFunctions(abi) {
    return abi.functions.filter((f) => f.access === "public");
}
function getReadOnlyFunctions(abi) {
    return abi.functions.filter((f) => f.access === "read_only");
}
function findFunction(abi, name) {
    return abi.functions.find((f) => f.name === name);
}
