import type { I18nProps } from './types';
import React from 'react';
interface Props extends I18nProps {
    children: React.ReactNode;
    doThrow?: boolean;
    error?: Error | null;
    onError?: () => void;
    trigger?: unknown;
}
declare const _default: React.ComponentType<Omit<import("react-i18next").Subtract<Props, import("react-i18next").WithTranslationProps>, keyof import("react-i18next").WithTranslation<N>> & import("react-i18next").WithTranslationProps>;
export default _default;
