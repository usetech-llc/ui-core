export declare type EnvConfigType = {
    canAddCollections: boolean;
    canCreateCollection: boolean;
    canCreateToken: boolean;
    canEditCollection: boolean;
    canEditToken: boolean;
    commission: 10;
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
    wssUrl: string;
};
declare global {
    interface Window {
        processEnv: EnvConfigType;
    }
}
declare const envConfig: EnvConfigType;
export default envConfig;
