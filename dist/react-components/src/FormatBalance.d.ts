import BN from 'bn.js';
import React from 'react';
import { Compact } from '@polkadot/types';
interface BareProps {
    className?: string;
    style?: Record<string, any>;
}
interface Props extends BareProps {
    children?: React.ReactNode;
    isShort?: boolean;
    label?: React.ReactNode;
    labelPost?: React.ReactNode;
    value?: Compact<any> | BN | string | null | 'all';
    withSi?: boolean;
}
declare function FormatBalance({ children, className, isShort, label, labelPost, value, withSi }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof FormatBalance>;
export default _default;
