// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringStore } from '@polkadot/ui-keyring/types';

import React from 'react';
import ApiWrapper from '@polkadot/apps/ApiWrapper';
import create from '@polkadot/apps-routing';

interface Props {
  store?: KeyringStore;
}

function Root ({ store }: Props): React.ReactElement<Props> {
  return (
    <ApiWrapper
      create={create}
      store={store}
    />
  );
}

export default React.memo(Root);
