import React from 'react';
import { Filters } from '@polkadot/app-nft-market/containers/NftMarket';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
interface PropTypes {
    account: string | undefined;
    filters: Filters;
    collections: NftCollectionInterface[];
    setFilters: (filters: Filters) => void;
    setUniqueCollectionIds: (collectionIds: string[]) => void;
}
declare const _default: React.MemoExoticComponent<({ account, collections, filters, setFilters, setUniqueCollectionIds }: PropTypes) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
