import './apps.scss';
import type { TFunction } from 'i18next';
import type { BareProps as Props } from '@polkadot/react-components/types';
import type { Routes } from './ApiWrapper';
import React from 'react';
export declare const PORTAL_ID = "portals";
export interface AppProps {
    children?: React.ReactNode;
    className?: string;
    createRoutes: (t: TFunction) => Routes;
    style?: React.CSSProperties;
}
declare function Apps({ className, createRoutes }: AppProps): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Apps>;
export default _default;
