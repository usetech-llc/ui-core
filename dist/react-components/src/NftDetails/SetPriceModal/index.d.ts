import './styles.scss';
import React from 'react';
interface Props {
    closeModal: () => void;
    onSavePrice: () => void;
    setTokenPriceForSale: (price: string) => void;
    tokenPriceForSale: string;
}
declare function SetPriceModal(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SetPriceModal>;
export default _default;
