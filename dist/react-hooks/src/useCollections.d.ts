import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import type { ErrorType } from '@polkadot/react-hooks/useFetch';
import type { TokenDetailsInterface } from '@polkadot/react-hooks/useToken';
import BN from 'bn.js';
import { Filters } from '@polkadot/app-nft-market/containers/NftMarket';
export declare type MetadataType = {
    metadata?: string;
};
export interface TokenInterface extends TokenDetailsInterface {
    collectionId: string;
    id: string;
}
export declare type OfferType = {
    collectionId: number;
    price: BN;
    seller: string;
    tokenId: string;
    metadata: any;
};
export declare type OffersResponseType = {
    items: OfferType[];
    itemsCount: number;
    page: number;
    pageSize: number;
};
export declare type HoldType = {
    collectionId: number;
    tokenId: string;
    owner: string;
};
export declare type HoldResponseType = {
    items: HoldType[];
    itemsCount: number;
    page: number;
    pageSize: number;
};
export declare type TradeType = {
    buyer?: string;
    collectionId: number;
    metadata: string;
    price: string;
    quoteId: number;
    seller: string;
    tradeDate: string;
    tokenId: number;
};
export declare type TradesResponseType = {
    items: TradeType[];
    itemsCount: number;
    page: number;
    pageSize: number;
};
export declare type CollectionWithTokensCount = {
    info: NftCollectionInterface;
    tokenCount: number;
};
export declare function useCollections(): {
    error: ErrorType | undefined;
    getCollectionWithTokenCount: (collectionId: string) => Promise<CollectionWithTokensCount>;
    getDetailedCollectionInfo: (collectionId: string) => Promise<{} | null>;
    getHoldByMe: (account: string, page: number, pageSize: number, collectionIds?: string[] | undefined) => void;
    getOffers: (page: number, pageSize: number, filters?: Filters | undefined) => void;
    getTokensOfCollection: (collectionId: string, ownerId: string) => Promise<never[] | import("@polkadot/types/types").Codec>;
    getTrades: ({ account, collectionIds, page, pageSize }: {
        account?: string | undefined;
        collectionIds?: string[] | undefined;
        page: number;
        pageSize: number;
    }) => void;
    holdLoading: boolean;
    myHold: {
        [key: string]: HoldType[];
    };
    myTrades: TradeType[] | undefined;
    offers: {
        [key: string]: OfferType;
    };
    offersCount: number | undefined;
    offersLoading: boolean;
    presetCollections: () => Promise<NftCollectionInterface[]>;
    presetTokensCollections: () => Promise<NftCollectionInterface[]>;
    trades: TradeType[] | undefined;
    tradesLoading: boolean;
};
