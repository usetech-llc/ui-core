import type { I18nProps } from '@polkadot/react-components/types';
import type { Registry } from '@polkadot/types/types';
import type { ComponentMap, ParamDef, RawParams } from './types';
import React from 'react';
import Holder from './Holder';
interface Props extends I18nProps {
    children?: React.ReactNode;
    isDisabled?: boolean;
    onChange?: (value: RawParams) => void;
    onEnter?: () => void;
    onError?: () => void;
    onEscape?: () => void;
    overrides?: ComponentMap;
    params: ParamDef[];
    registry?: Registry;
    values?: RawParams | null;
    withBorder?: boolean;
}
export { Holder };
declare const _default: React.ComponentType<Omit<import("react-i18next").Subtract<Props, import("react-i18next").WithTranslationProps>, keyof import("react-i18next").WithTranslation<N>> & import("react-i18next").WithTranslationProps>;
export default _default;
