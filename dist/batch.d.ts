import type { ContractCallOptions, BatchResult } from "@stacks-helpers/types";
export declare function batchCall(calls: ContractCallOptions[], delayMs?: number): Promise<BatchResult[]>;
