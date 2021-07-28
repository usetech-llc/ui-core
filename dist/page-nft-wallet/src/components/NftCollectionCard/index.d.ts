import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import type { HoldType } from '@polkadot/react-hooks/useCollections';
import React from 'react';
interface Props {
    account?: string;
    canTransferTokens: boolean;
    collection: NftCollectionInterface;
    removeCollection: (collection: string) => void;
    onHold: HoldType[];
    openTransferModal: (collection: NftCollectionInterface, tokenId: string, balance: number) => void;
    shouldUpdateTokens: string | undefined;
    tokensSelling: string[];
}
declare function NftCollectionCard({ account, canTransferTokens, collection, onHold, openTransferModal, removeCollection, shouldUpdateTokens, tokensSelling }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NftCollectionCard>;
export default _default;
