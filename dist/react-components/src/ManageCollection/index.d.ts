import './styles.scss';
import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import React from 'react';
interface Props {
    account?: string;
    addCollection: (collection: NftCollectionInterface) => void;
    basePath: string;
    setShouldUpdateTokens?: (collectionId: string) => void;
}
declare function ManageCollection(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ManageCollection>;
export default _default;
