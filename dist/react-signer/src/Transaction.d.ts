import type { QueueTx } from '@polkadot/react-components/Status/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    currentItem: QueueTx;
    onError: () => void;
    tip?: BN;
}
declare function Transaction({ className, currentItem: { accountId, extrinsic, isUnsigned, payload }, tip }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Transaction>;
export default _default;
