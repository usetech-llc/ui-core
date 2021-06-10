import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
interface NftWalletProps {
    account?: string;
    addCollection: (collection: NftCollectionInterface) => void;
    collections: NftCollectionInterface[];
    removeCollectionFromList: (collectionToRemove: string) => void;
    setCollections: (collections: NftCollectionInterface[]) => void;
    setShouldUpdateTokens: (value: string) => void;
    shouldUpdateTokens?: string;
}
declare function NftWallet({ account, addCollection, collections, removeCollectionFromList, setCollections, setShouldUpdateTokens, shouldUpdateTokens }: NftWalletProps): React.ReactElement;
declare const _default: React.MemoExoticComponent<typeof NftWallet>;
export default _default;
