import BN from 'bn.js';
import { Abi, ContractPromise } from '@polkadot/api-contract';
export interface AskOutputInterface {
    output: [string, string, string, BN, string];
}
export interface useNftContractInterface {
    abi: Abi | undefined;
    contractInstance: ContractPromise | null;
    decimals: BN;
    deposited: BN | undefined;
    depositor: string | undefined;
    getDepositor: (collectionId: string, tokenId: string) => Promise<string | null>;
    getTokenAsk: (collectionId: string, tokenId: string) => Promise<{
        owner: string;
        price: BN;
    } | null>;
    getUserDeposit: () => Promise<BN | null>;
    isContractReady: boolean;
    tokenAsk: {
        owner: string;
        price: BN;
    } | undefined;
}
export declare function useNftContract(account: string): useNftContractInterface;
