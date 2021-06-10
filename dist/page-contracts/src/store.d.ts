import type { Hash } from '@polkadot/types/interfaces';
import type { CodeJson, CodeStored } from './types';
import EventEmitter from 'eventemitter3';
declare class Store extends EventEmitter {
    #private;
    get hasCode(): boolean;
    getAllCode(): CodeStored[];
    getCode(codeHash: string): CodeStored | undefined;
    saveCode(_codeHash: string | Hash, partial: Partial<CodeJson>): void;
    forgetCode(codeHash: string): void;
    loadAll(onLoaded?: () => void): void;
    private addCode;
    private removeCode;
}
declare const _default: Store;
export default _default;
