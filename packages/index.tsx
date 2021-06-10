// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps } from '@polkadot/react-components/types';

import React from 'react';

import Accounts from '@polkadot/app-accounts';

const AccountsWrapper = (props: AppProps): JSX.Element => (
  <div className='accounts-wrapper'>
    <Accounts
      {...props}
    />
  </div>
);

export default AccountsWrapper;
