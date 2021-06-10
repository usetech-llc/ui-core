import type BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    id: BN;
}
declare function ParaLink({ className, id }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ParaLink, any, {}, never>>;
export default _default;
