import React from 'react';
interface Props {
    onChange: (accountId: string | undefined) => void;
}
declare function AccountSelector({ onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof AccountSelector>;
export default _default;
