export declare type EnvConfigType = {
    canAddCollections: boolean;
    canCreateCollection: boolean;
    canCreateToken: boolean;
    canEditCollection: boolean;
    canEditToken: boolean;
    contractAddress: string;
    escrowAddress: string;
    faviconPath: string;
    kusamaDecimals: number;
    maxGas: number;
    quoteId: number;
    showMarketActions: boolean;
    uniqueCollectionIds: string[];
    value: number;
    walletMode: boolean;
};
declare global {
    interface Window {
        processEnv: EnvConfigType;
    }
}
declare const envConfig: EnvConfigType;
export default envConfig;
