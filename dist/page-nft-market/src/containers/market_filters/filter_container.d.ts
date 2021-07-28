import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
interface PropTypes {
    account: string | undefined;
    filterBySeller: (isOnlyMyToken: boolean) => void;
    changeuniqueCollectionIds: (arr: string[]) => void;
    collections: NftCollectionInterface[];
    changePrices: (minPrice: string, maxPrice: string) => void;
}
declare const FilterContainer: React.FC<PropTypes>;
export default FilterContainer;
