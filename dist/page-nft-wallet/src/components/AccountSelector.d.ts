import React from 'react';
interface Props {
    className?: string;
    onChange: (accountId: string | undefined) => void;
}
declare function AccountSelector({ className, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AccountSelector, any, {}, never>>;
export default _default;
