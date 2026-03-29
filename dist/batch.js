"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchCall = batchCall;
const write_1 = require("./write");
async function batchCall(calls, delayMs = 2000) {
    const results = [];
    for (const call of calls) {
        const result = await (0, write_1.callContract)(call);
        results.push(result);
        if (delayMs > 0 && calls.indexOf(call) < calls.length - 1) {
            await new Promise((r) => setTimeout(r, delayMs));
        }
    }
    return results;
}
