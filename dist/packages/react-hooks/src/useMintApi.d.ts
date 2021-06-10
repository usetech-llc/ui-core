export interface ImageInterface {
    address: string;
    filename: string;
    image: string;
    name: string;
}
export interface UseMintApiInterface {
    imgLoading: boolean;
    serverIsReady: boolean;
    uploadImage: (image: ImageInterface) => void;
    uploadingError: string | undefined;
}
/**
 * Get validators from server if health "connected":true
 * @return {Array<ValidatorInfo>} filtered validators from server
 */
export declare function useMintApi(): UseMintApiInterface;
