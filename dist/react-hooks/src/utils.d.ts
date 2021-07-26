import type { ContractPromise } from '@polkadot/api-contract';
import type { AbiMessage } from '@polkadot/api-contract/types';
export declare const findCallMethodByName: (contractInstance: ContractPromise | null, methodName: string) => AbiMessage | null;
export declare function strToUTF16(str: string): any;
