import './styles.scss';
import type { OfferType } from '@polkadot/react-hooks/useCollections';
import React from 'react';
import { AttributesDecoded } from '@polkadot/react-hooks/useSchema';
interface Props {
    account: string;
    collectionId: string;
    onSetTokenAttributes?: (collectionId: string, tokenId: string, attributes: AttributesDecoded) => void;
    openDetailedInformationModal: (collectionId: string, tokenId: string) => void;
    token: OfferType;
}
declare const _default: React.MemoExoticComponent<({ account, collectionId, onSetTokenAttributes, openDetailedInformationModal, token }: Props) => React.ReactElement<Props, string | React.JSXElementConstructor<any>>>;
export default _default;
