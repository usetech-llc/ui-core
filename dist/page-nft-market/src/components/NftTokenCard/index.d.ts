import './styles.scss';
import type { OfferType } from '@polkadot/react-hooks/useCollections';
import React from 'react';
interface Props {
    account: string | undefined;
    collectionId: string;
    openDetailedInformationModal: (collectionId: string, tokenId: string) => void;
    token: OfferType;
}
declare const _default: React.MemoExoticComponent<({ account, collectionId, openDetailedInformationModal, token }: Props) => React.ReactElement<Props, string | React.JSXElementConstructor<any>>>;
export default _default;
