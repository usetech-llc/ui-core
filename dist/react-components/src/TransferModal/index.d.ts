import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
interface Props {
    account?: string;
    collection: NftCollectionInterface;
    closeModal: () => void;
    reFungibleBalance: number;
    tokenId: string;
    updateTokens: (collectionId: string) => void;
}
declare function TransferModal({ account, closeModal, collection, reFungibleBalance, tokenId, updateTokens }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TransferModal>;
export default _default;
