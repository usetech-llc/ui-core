import './styles.scss';
import React from 'react';
interface Props {
    isDisabled?: boolean;
    setValues: (values: string[]) => void;
    values: string[];
}
declare function EnumInput({ isDisabled, setValues, values }: Props): React.ReactElement;
declare const _default: React.MemoExoticComponent<typeof EnumInput>;
export default _default;
