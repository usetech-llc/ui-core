import React from 'react';
import { ProtobufAttributeType } from '@polkadot/react-components/util/protobufUtils';
interface Props {
    account?: string;
    collectionId?: string;
    fetchCollectionInfo: () => void;
    isAdmin?: boolean;
    onChainSchema?: ProtobufAttributeType;
    saveOnChainSchema: (args: {
        account: string;
        collectionId: string;
        schema: string;
        successCallback?: () => void;
        errorCallback?: () => void;
    }) => void;
}
declare function ManageOnChainSchema(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ManageOnChainSchema>;
export default _default;
