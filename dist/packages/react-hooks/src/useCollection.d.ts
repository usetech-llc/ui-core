import BN from 'bn.js';
import { ProtobufAttributeType } from '@polkadot/react-components/util/protobufUtils';
export declare type SchemaVersionTypes = 'ImageURL' | 'Unique';
export interface NftCollectionInterface {
    Access?: 'Normal';
    id: string;
    DecimalPoints: BN | number;
    Description: number[];
    TokenPrefix: string;
    MintMode?: boolean;
    Mode: {
        nft: null;
        fungible: null;
        reFungible: null;
        invalid: null;
    };
    Name: number[];
    OffchainSchema: string;
    Owner?: string;
    SchemaVersion: SchemaVersionTypes;
    Sponsorship: {
        confirmed?: string;
        disabled?: string | null;
        unconfirmed?: string | null;
    };
    Limits?: {
        AccountTokenOwnershipLimit: string;
        SponsoredMintSize: string;
        TokenLimit: string;
        SponsorTimeout: string;
    };
    VariableOnChainSchema: string;
    ConstOnChainSchema: string;
}
interface TransactionCallBacks {
    onFailed?: () => void;
    onStart?: () => void;
    onSuccess?: () => void;
    onUpdate?: () => void;
}
export declare function useCollection(): {
    addCollectionAdmin: ({ account, collectionId, errorCallback, newAdminAddress, successCallback }: {
        account: string;
        collectionId: string;
        newAdminAddress: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    confirmSponsorship: ({ account, collectionId, errorCallback, successCallback }: {
        account: string;
        collectionId: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    createCollection: (account: string, { description, modeprm, name, tokenPrefix }: {
        name: string;
        description: string;
        tokenPrefix: string;
        modeprm: {
            nft?: null;
            fungible?: null;
            refungible?: null;
            invalid?: null;
        };
    }, callBacks?: TransactionCallBacks | undefined) => void;
    getCollectionAdminList: (collectionId: string) => Promise<never[] | import("@polkadot/types/types").Codec>;
    getCollectionOnChainSchema: (collectionInfo: NftCollectionInterface) => {
        constSchema: ProtobufAttributeType | undefined;
        variableSchema: ProtobufAttributeType | undefined;
    };
    getCollectionTokensCount: (collectionId: string) => Promise<never[] | import("@polkadot/types/types").Codec | 0>;
    getCreatedCollectionCount: () => Promise<number>;
    getDetailedCollectionInfo: (collectionId: string) => Promise<{} | null>;
    getTokensOfCollection: (collectionId: string, ownerId: string) => Promise<never[] | import("@polkadot/types/types").Codec>;
    removeCollectionAdmin: ({ account, adminAddress, collectionId, errorCallback, successCallback }: {
        account: string;
        collectionId: string;
        adminAddress: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    removeCollectionSponsor: ({ account, collectionId, errorCallback, successCallback }: {
        account: string;
        collectionId: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    saveConstOnChainSchema: ({ account, collectionId, errorCallback, schema, successCallback }: {
        account: string;
        collectionId: string;
        schema: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    saveVariableOnChainSchema: ({ account, collectionId, errorCallback, schema, successCallback }: {
        account: string;
        collectionId: string;
        schema: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    setCollectionSponsor: ({ account, collectionId, errorCallback, newSponsor, successCallback }: {
        account: string;
        collectionId: string;
        newSponsor: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    setOffChainSchema: ({ account, collectionId, errorCallback, schema, successCallback }: {
        account: string;
        schema: string;
        collectionId: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
    setSchemaVersion: ({ account, collectionId, errorCallback, schemaVersion, successCallback }: {
        account: string;
        schemaVersion: SchemaVersionTypes;
        collectionId: string;
        successCallback?: (() => void) | undefined;
        errorCallback?: (() => void) | undefined;
    }) => void;
};
export {};
