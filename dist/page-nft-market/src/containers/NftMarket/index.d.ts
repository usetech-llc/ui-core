import './styles.scss';
import React from 'react';
interface BuyTokensProps {
    account?: string | undefined;
    setShouldUpdateTokens: (value?: string) => void;
    shouldUpdateTokens?: string;
}
export interface Filters {
    [key: string]: string | string[];
}
declare const _default: React.MemoExoticComponent<({ account, setShouldUpdateTokens, shouldUpdateTokens }: BuyTokensProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
