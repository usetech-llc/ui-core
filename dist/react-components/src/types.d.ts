/// <reference types="react" />
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { WithTranslation } from 'react-i18next';
import type { SubmittableExtrinsic } from '@polkadot/api/types';
import type { Abi } from '@polkadot/api-contract';
import type { ActionStatus, TxCallback, TxFailedCallback } from '@polkadot/react-components/Status/types';
import type { AccountId, Index } from '@polkadot/types/interfaces';
export interface BareProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface AppProps {
    account?: string;
    basePath: string;
    className?: string;
    onStatusChange: (status: ActionStatus) => void;
}
export declare type I18nProps = BareProps & WithTranslation;
export interface TxButtonProps {
    accountId?: AccountId | string | null;
    accountNonce?: Index;
    className?: string;
    extrinsic?: SubmittableExtrinsic<'promise'> | SubmittableExtrinsic<'promise'>[] | null;
    icon?: IconName;
    isBasic?: boolean;
    isBusy?: boolean;
    isDisabled?: boolean;
    isIcon?: boolean;
    isToplevel?: boolean;
    isUnsigned?: boolean;
    label?: React.ReactNode;
    onClick?: () => void;
    onFailed?: TxFailedCallback;
    onSendRef?: React.MutableRefObject<(() => void) | undefined>;
    onStart?: () => void;
    onSuccess?: TxCallback;
    onUpdate?: TxCallback;
    params?: any[] | (() => any[]);
    tooltip?: string;
    tx?: ((...args: any[]) => SubmittableExtrinsic<'promise'>) | null;
    withoutLink?: boolean;
    withSpinner?: boolean;
}
export declare type BitLength = 8 | 16 | 32 | 64 | 128 | 256;
interface ContractBase {
    abi: Abi;
}
export interface Contract extends ContractBase {
    address: null;
}
export interface ContractDeployed extends ContractBase {
    address: string;
}
export declare type CallContract = ContractDeployed;
export interface NullContract {
    abi: null;
    address: null;
}
export declare type ThemeType = 'Unique' | 'NF3Digital' | 'LUVNFT' | 'Vernissage';
export interface ThemeDef {
    domain?: string;
    ip?: string;
    theme: ThemeType;
    logo?: string;
}
export interface ThemeProps {
    theme: ThemeDef;
}
export {};
