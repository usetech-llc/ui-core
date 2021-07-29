import './styles.scss';
import React from 'react';
interface NftDetailsProps {
    account: string;
    setShouldUpdateTokens?: (collectionId: string) => void;
}
declare function NftDetails({ account, setShouldUpdateTokens }: NftDetailsProps): React.ReactElement<NftDetailsProps>;
declare const _default: React.MemoExoticComponent<typeof NftDetails>;
export default _default;
