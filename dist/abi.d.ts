export interface ContractFunction {
    name: string;
    access: "public" | "read_only" | "private";
    args: {
        name: string;
        type: string;
    }[];
    outputs: {
        type: string;
    };
}
export interface ContractABI {
    functions: ContractFunction[];
}
export declare function getPublicFunctions(abi: ContractABI): ContractFunction[];
export declare function getReadOnlyFunctions(abi: ContractABI): ContractFunction[];
export declare function findFunction(abi: ContractABI, name: string): ContractFunction | undefined;
