import React from 'react';
import { Filters } from '@polkadot/app-nft-market/containers/NftMarket';
interface PropTypes {
    filters: {
        [key: string]: any;
        traitsCount: string[];
    };
    setFilters: (filters: Filters) => void;
}
declare const _default: React.MemoExoticComponent<({ filters, setFilters }: PropTypes) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
