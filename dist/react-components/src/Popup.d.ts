import type { PopupProps } from 'semantic-ui-react';
import React from 'react';
interface Props {
    basic?: boolean;
    children: React.ReactNode;
    className?: string;
    isOpen?: boolean;
    offset?: PopupProps['offset'];
    on?: PopupProps['on'];
    onClose?: () => void;
    position?: PopupProps['position'];
    style?: PopupProps['style'];
    trigger?: React.ReactNode;
}
declare function Popup({ basic, children, className, isOpen, offset, on, onClose, position, style, trigger }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Popup>;
export default _default;
