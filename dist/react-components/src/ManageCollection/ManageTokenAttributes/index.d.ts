import './styles.scss';
import React from 'react';
export declare type TokenAttribute = {
    name: string;
    value?: string | number;
    values?: number[];
};
interface Props {
    account?: string;
    setShouldUpdateTokens?: (collectionId: string) => void;
}
declare function ManageTokenAttributes({ account, setShouldUpdateTokens }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ManageTokenAttributes>;
export default _default;
