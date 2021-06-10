import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
interface Props {
    account: string | null | undefined;
    addCollection: (item: NftCollectionInterface) => void;
    collections: NftCollectionInterface[];
}
declare function CollectionSearch({ account, addCollection, collections }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CollectionSearch>;
export default _default;
