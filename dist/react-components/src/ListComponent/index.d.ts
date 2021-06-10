import './styles.scss';
import React, { ReactText } from 'react';
interface Props {
    children: React.ReactNode | React.ReactNode[];
    empty?: string;
    header: ReactText[][];
}
declare function ListComponent(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ListComponent>;
export default _default;
