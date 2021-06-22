import './styles.scss';
import type { ActionStatus } from '@polkadot/react-components/Status/types';
import React from 'react';
interface Props {
    className?: string;
    onStatusChange: (status: ActionStatus) => void;
}
declare function Overview({ className, onStatusChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
