import BN from 'bn.js';
interface UseBalancesInterface {
    freeBalance: BN | undefined;
    freeKusamaBalance: BN | undefined;
}
export declare const useBalances: (account: string | undefined, getUserDeposit: () => Promise<BN | null>) => UseBalancesInterface;
export {};
