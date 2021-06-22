import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
export interface TokenDetailsInterface {
    Owner?: any[];
    ConstData?: string;
    VariableData?: string;
}
interface UseTokenInterface {
    createNft: (obj: {
        account: string;
        collectionId: string;
        constData: string;
        variableData: string;
        successCallback?: () => void;
        errorCallback?: () => void;
        owner: string;
    }) => void;
    getDetailedReFungibleTokenInfo: (collectionId: string, tokenId: string) => Promise<TokenDetailsInterface>;
    getDetailedTokenInfo: (collectionId: string, tokenId: string) => Promise<TokenDetailsInterface>;
    getTokenInfo: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<TokenDetailsInterface>;
    setVariableMetadata: (obj: {
        account: string;
        collectionId: string;
        variableData: string;
        successCallback?: () => void;
        errorCallback?: () => void;
        tokenId: string;
    }) => void;
}
export declare function useToken(): UseTokenInterface;
export {};
