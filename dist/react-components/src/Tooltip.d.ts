import React from 'react';
interface Props {
    arrowColor?: string;
    backgroundColor?: string;
    className?: string;
    dataFor?: string;
    effect?: 'solid' | 'float';
    offset?: {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    };
    place?: 'bottom' | 'top' | 'right' | 'left';
    text: React.ReactNode;
    textColor?: string;
    trigger: string;
}
declare function Tooltip({ arrowColor, backgroundColor, className, effect, offset, place, text, textColor, trigger }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tooltip, any, {}, never>>;
export default _default;
