import BN from 'bn.js';
export interface BalanceInterface {
    free: BN;
    feeFrozen: BN;
    miscFrozen: BN;
    reserved: BN;
}
export interface UseBalanceInterface {
    balance: BalanceInterface | null;
    balanceError: boolean;
    existentialDeposit: BN | null;
}
export declare function useBalance(accountId?: string): UseBalanceInterface;
