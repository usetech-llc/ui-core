import type { DeriveBalancesAll } from '@polkadot/api-derive/types';
import BN from 'bn.js';
interface UseBalancesInterface {
    balancesAll: DeriveBalancesAll | undefined;
    deposited: BN | undefined;
    kusamaBalancesAll: DeriveBalancesAll | undefined;
}
export declare const useBalances: (account: string | undefined, deposited: BN | undefined, getUserDeposit: () => Promise<BN | null>) => UseBalancesInterface;
export {};
