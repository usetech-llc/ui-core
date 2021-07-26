import './styles.scss';
import BN from 'bn.js';
import React from 'react';
import { ContractPromise } from '@polkadot/api-contract';
interface Props {
    account?: string;
    closeModal: () => void;
    contractInstance: ContractPromise | null;
    deposited: BN | undefined;
    updateDeposit: () => Promise<BN | null>;
}
declare function WithdrawModal({ account, closeModal, contractInstance, deposited, updateDeposit }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof WithdrawModal>;
export default _default;
