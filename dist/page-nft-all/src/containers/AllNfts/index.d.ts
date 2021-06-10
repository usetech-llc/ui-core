import './styles.scss';
import React from 'react';
interface BuyTokensProps {
    account?: string;
    setShouldUpdateTokens: (value?: string) => void;
    shouldUpdateTokens?: string;
}
declare const _default: React.MemoExoticComponent<({ account, setShouldUpdateTokens }: BuyTokensProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
