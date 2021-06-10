import type { Props } from '../types';
import React from 'react';
declare type TextMap = Record<number, string>;
export declare const textMap: TextMap;
declare function VoteThresholdParam({ className, defaultValue: { value }, isDisabled, isError, label, onChange, registry, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof VoteThresholdParam>;
export default _default;
