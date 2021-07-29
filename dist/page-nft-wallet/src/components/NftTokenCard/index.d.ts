import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
import { HoldType } from '@polkadot/react-hooks/useCollections';
interface Props {
    account: string;
    canTransferTokens: boolean;
    collection: NftCollectionInterface;
    onHold: HoldType[];
    openTransferModal: (collection: NftCollectionInterface, tokenId: string, balance: number) => void;
    shouldUpdateTokens: string | undefined;
    token: string;
    tokensSelling: string[];
}
declare function NftTokenCard({ account, canTransferTokens, collection, onHold, openTransferModal, token, tokensSelling }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NftTokenCard>;
export default _default;
