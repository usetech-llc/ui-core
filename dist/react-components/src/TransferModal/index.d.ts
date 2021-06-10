import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
interface Props {
    account?: string;
    balance: number;
    collection: NftCollectionInterface;
    closeModal: () => void;
    tokenId: string;
    updateTokens: (collectionId: string) => void;
}
declare function TransferModal({ account, balance, closeModal, collection, tokenId, updateTokens }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TransferModal>;
export default _default;
