"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callContract = callContract;
const transactions_1 = require("@stacks/transactions");
async function callContract(options) {
    try {
        const tx = await (0, transactions_1.makeContractCall)({
            contractAddress: options.contractAddress,
            contractName: options.contractName,
            functionName: options.functionName,
            functionArgs: options.functionArgs,
            senderKey: options.senderKey,
            network: options.network,
            nonce: options.nonce,
            fee: options.fee,
            postConditionMode: options.postConditionMode ?? transactions_1.PostConditionMode.Allow,
        });
        const result = await (0, transactions_1.broadcastTransaction)({ transaction: tx, network: options.network });
        const txid = typeof result === "string" ? result : result?.txid;
        if (txid && !result.error) {
            return { txid, success: true };
        }
        else {
            return { txid: "", success: false, error: JSON.stringify(result) };
        }
    }
    catch (err) {
        return { txid: "", success: false, error: err.message };
    }
}
