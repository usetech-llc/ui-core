import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import { AttributesDecoded } from '@polkadot/react-hooks/useSchema';
interface UseMetadataInterface {
    decodeStruct: ({ attr, data }: {
        attr?: any;
        data?: string;
    }) => AttributesDecoded;
    getAndParseOffchainSchemaMetadata: (collectionInfo: NftCollectionInterface) => Promise<{
        metadata: string;
        metadataJson: MetadataJsonType;
    }>;
    getOnChainSchema: (collectionInfo: NftCollectionInterface) => {
        attributesConst: string;
        attributesVar: string;
    };
    getTokenAttributes: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<AttributesDecoded>;
    getTokenImageUrl: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<string>;
    setUnique: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<string>;
    tokenImageUrl: (urlString: string, tokenId: string) => string;
}
export declare type MetadataJsonType = {
    audio?: string;
    image?: string;
    page?: string;
    video?: string;
};
export declare const useMetadata: () => UseMetadataInterface;
export {};
