import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import type { TokenDetailsInterface } from '@polkadot/react-hooks/useToken';
export declare type AttributesDecoded = {
    [key: string]: string | string[];
};
interface UseSchemaInterface {
    attributes?: AttributesDecoded;
    attributesConst?: string;
    attributesVar?: string;
    collectionInfo?: NftCollectionInterface;
    getCollectionInfo: () => void;
    getTokenDetails: () => void;
    reFungibleBalance: number;
    tokenDetails?: TokenDetailsInterface;
    tokenName: {
        name: string;
        value: string;
    } | null;
    tokenUrl: string;
}
export declare function useSchema(account: string, collectionId: string, tokenId: string | number): UseSchemaInterface;
export {};
