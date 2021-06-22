import 'semantic-ui-css/semantic.min.css';
import '@polkadot/react-components/i18n';
import './initSettings';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { TFunction } from 'i18next';
import type { KeyringStore } from '@polkadot/ui-keyring/types';
import React from 'react';
import { AppProps, BareProps } from '@polkadot/react-components/types';
export interface RouteProps extends AppProps, BareProps {
    account?: string;
    location: any;
}
export declare type RouteGroup = 'accounts' | 'developer' | 'governance' | 'network' | 'nft' | 'settings';
export interface Route {
    Component: React.ComponentType<RouteProps>;
    Modal?: React.ComponentType<any>;
    display: {
        isHidden?: boolean;
        isModal?: boolean;
        needsAccounts?: boolean;
        needsApi?: (string | string[])[];
        needsSudo?: boolean;
    };
    group: RouteGroup;
    icon: IconName;
    isIgnored?: boolean;
    name: string;
    text: string;
    useCounter?: () => number | string | null;
}
export declare type Routes = Route[];
interface Props {
    create: (t: TFunction) => Routes;
    store?: KeyringStore;
}
declare function ApiWrapper({ create, store }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ApiWrapper>;
export default _default;
