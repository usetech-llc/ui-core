import './styles.scss';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isReadOnly?: boolean;
    label?: React.ReactNode;
    onChange?: (arg: string) => void;
    placeholder?: string;
    seed?: string;
    withLabel?: boolean;
}
declare function Index({ children, className, help, isDisabled, isError, isReadOnly, label, onChange, placeholder, seed, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Index>;
export default _default;
