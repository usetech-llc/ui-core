interface UseDecoderInterface {
    collectionName16Decoder: (name: number[]) => string;
    collectionName8Decoder: (name: number[]) => string;
    hex2a: (hex: string) => string;
}
export declare function useDecoder(): UseDecoderInterface;
export {};
