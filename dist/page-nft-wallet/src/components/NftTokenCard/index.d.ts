import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
interface Props {
    account: string;
    canTransferTokens: boolean;
    collection: NftCollectionInterface;
    openTransferModal: (collection: NftCollectionInterface, tokenId: string, balance: number) => void;
    shouldUpdateTokens: string | undefined;
    token: string;
}
declare function NftTokenCard({ account, canTransferTokens, collection, openTransferModal, token }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NftTokenCard>;
export default _default;
