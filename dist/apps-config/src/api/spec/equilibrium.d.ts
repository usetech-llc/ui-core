import type { AccountId, Balance, Index } from '@polkadot/types/interfaces';
import type { OverrideBundleDefinition } from '@polkadot/types/types';
export interface EQDeriveBalancesAll {
    additional: [];
    freeBalance: Balance;
    reservedBalance: Balance;
    vestingLocked: Balance;
    lockedBalance: Balance;
    accountId: AccountId;
    accountNonce: Index;
    lockedBreakdown: unknown[];
}
declare const definitions: OverrideBundleDefinition;
export default definitions;
