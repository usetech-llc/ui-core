import { Type } from 'protobufjs';
export declare type FieldType = 'string' | 'enum';
export declare type FieldRuleType = 'optional' | 'required' | 'repeated';
export declare type AttributeItemType = {
    id?: number;
    fieldType: FieldType;
    name: string;
    rule: FieldRuleType;
    values: string[];
};
export declare type ProtobufAttributeType = {
    nested: {
        onChainMetaData: {
            nested: {
                [key: string]: {
                    fields?: {
                        [key: string]: {
                            id: number;
                            rule: FieldRuleType;
                            type: string;
                        };
                    };
                    options?: {
                        [key: string]: string;
                    };
                    values?: {
                        [key: string]: number;
                    };
                };
            };
        };
    };
};
export declare function serializeNft(onChainSchema: ProtobufAttributeType, payload: {
    [key: string]: number | number[] | string;
}): Uint8Array;
export declare function convertEnumToString(value: string, key: string, NFTMeta: Type, locale: string): string;
export declare function deserializeNft(onChainSchema: ProtobufAttributeType, buffer: Uint8Array, locale: string): {
    [key: string]: any;
};
export declare const fillAttributes: (protobufJson: ProtobufAttributeType) => AttributeItemType[];
export declare const fillProtobufJson: (attrs: AttributeItemType[]) => ProtobufAttributeType;
