import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import type { TokenDetailsInterface } from '@polkadot/react-hooks/useToken';
import BN from 'bn.js';
import { BalanceInterface } from '@polkadot/react-hooks/useBalance';
declare type UserActionType = 'BUY' | 'CANCEL' | 'SELL' | 'REVERT_UNUSED_MONEY' | 'UPDATE_TOKEN_STATE' | 'OFFER_TRANSACTION_FAIL' | 'SUBMIT_OFFER' | 'OFFER_TRANSACTION_SUCCESS';
export interface MarketplaceStagesInterface {
    buyFee: BN | undefined;
    cancelStep: boolean;
    deposited: BN | undefined;
    depositor: string | undefined;
    escrowAddress: string;
    error: string | null;
    formatKsmBalance: (value: BN | undefined) => string;
    kusamaBalance: BalanceInterface | undefined;
    saleFee: BN | undefined;
    sendCurrentUserAction: (action: UserActionType) => void;
    setPrice: (price: string) => void;
    setReadyToAskPrice: (ready: boolean) => void;
    setTokenPriceForSale: (price: number) => void;
    setWithdrawAmount: (withdrawAmount: string) => void;
    tokenAsk: {
        owner: string;
        price: BN;
    } | undefined;
    tokenInfo: TokenDetailsInterface | undefined;
    tokenPriceForSale: number | undefined;
    transferStep: number;
    readyToAskPrice: boolean;
    withdrawAmount: string;
}
export declare const useMarketplaceStages: (account: string, collectionInfo: NftCollectionInterface | undefined, tokenId: string) => MarketplaceStagesInterface;
export {};
