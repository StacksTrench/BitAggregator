"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callReadOnly = callReadOnly;
const types_1 = require("@stacks-helpers/types");
async function callReadOnly(contractAddress, contractName, functionName, functionArgs, senderAddress, networkUrl = types_1.API_URLS.mainnet) {
    const url = `${networkUrl}/v2/contracts/call-read/${contractAddress}/${contractName}/${functionName}`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: senderAddress, arguments: functionArgs }),
    });
    if (!response.ok) {
        throw new Error(`Read-only call failed: ${response.status}`);
    }
    const data = await response.json();
    if (!data.okay) {
        throw new Error(`Contract error: ${data.cause}`);
    }
    return data.result;
}
