import { MessageInterface } from '../types';
import React from 'react';
import './MessageWrapper.scss';
interface Props {
    messages: Array<MessageInterface>;
}
declare function MessageWrapper({ messages }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof MessageWrapper>;
export default _default;
