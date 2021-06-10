declare const protobufJsonExample: {
    nested: {
        onChainMetaData: {
            nested: {
                Gender: {
                    options: {
                        Female: string;
                        Male: string;
                    };
                    values: {
                        Female: number;
                        Male: number;
                    };
                };
                NFTMeta: {
                    fields: {
                        gender: {
                            id: number;
                            rule: string;
                            type: string;
                        };
                        imageHash: {
                            id: number;
                            rule: string;
                            type: string;
                        };
                        name: {
                            id: number;
                            rule: string;
                            type: string;
                        };
                        traits: {
                            id: number;
                            rule: string;
                            type: string;
                        };
                    };
                };
                PunkTrait: {
                    options: {
                        field1: string;
                        field2: string;
                        field3: string;
                        field4: string;
                        field5: string;
                        field6: string;
                        field7: string;
                        field8: string;
                        field9: string;
                        field91: string;
                        field92: string;
                    };
                    values: {
                        field1: number;
                        field2: number;
                        field3: number;
                        field4: number;
                        field5: number;
                        field6: number;
                        field7: number;
                        field8: number;
                        field9: number;
                        field91: number;
                        field92: number;
                    };
                };
            };
        };
    };
};
export default protobufJsonExample;
