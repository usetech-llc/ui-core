import './styles.scss';
import React from 'react';
import { ProtobufAttributeType } from '@polkadot/react-components/util/protobufUtils';
interface Props {
    account?: string;
    basePath: string;
    collectionId?: string;
    constOnChainSchema?: ProtobufAttributeType;
    fetchCollectionInfo: () => void;
    isAdmin?: boolean;
    saveConstOnChainSchema: (args: {
        account: string;
        collectionId: string;
        schema: string;
        successCallback?: () => void;
        errorCallback?: () => void;
    }) => void;
    saveVariableOnChainSchema: (args: {
        account: string;
        collectionId: string;
        schema: string;
        successCallback?: () => void;
        errorCallback?: () => void;
    }) => void;
    variableOnChainSchema?: ProtobufAttributeType;
}
declare function ManageCollectionAttributes(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ManageCollectionAttributes>;
export default _default;
