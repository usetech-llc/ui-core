// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeDef } from '@polkadot/react-components/types';
import type { KeyringStore } from '@polkadot/ui-keyring/types';

// setup these right at front
import 'semantic-ui-css/semantic.min.css';
import '@polkadot/react-components/i18n';

import './initSettings';
import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import type { TFunction } from 'i18next';
import { ThemeProvider } from 'styled-components';

import { Api } from '@polkadot/react-api';
import Queue from '@polkadot/react-components/Status/Queue';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { BlockAuthors, Events } from '@polkadot/react-query';
import { settings } from '@polkadot/ui-settings';

import Apps from './Apps';
import { Themes, uniqueTheme } from './themes';
import WindowDimensions from './WindowDimensions';
import { AppProps, BareProps } from "@polkadot/react-components/types";

export interface RouteProps extends AppProps, BareProps {
  account?: string;
  location: any;
}

export interface RouteProps extends AppProps, BareProps {
  account?: string;
  location: any;
}

export type RouteGroup = 'accounts' | 'developer' | 'governance' | 'network' | 'nft' | 'settings';

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

export type Routes = Route[];

interface Props {
  create: (t: TFunction) => Routes;
  store?: KeyringStore;
}

function createTheme ({ uiTheme }: { uiTheme: string }): ThemeDef {
  const validTheme = Themes.find((themeElem) => {
    return (themeElem.domain && window.location.href.includes(themeElem.domain)) || (themeElem.ip && window.location.href.includes(themeElem.ip));
  });

  document && document.documentElement &&
  document.documentElement.setAttribute('data-theme', validTheme ? validTheme.theme : 'Unique');

  return validTheme || uniqueTheme;
}

function ApiWrapper ({ create, store }: Props): React.ReactElement<Props> {
  const [theme, setTheme] = useState(() => createTheme(settings));

  useEffect((): void => {
    settings.on('change', (settings) => setTheme(createTheme(settings)));
  }, []);

  return (
    <Suspense fallback='...'>
      <ThemeProvider theme={theme}>
        <Queue>
          <Api
            store={store}
            url={settings.apiUrl}
          >
            <BlockAuthors>
              <Events>
                <HashRouter>
                  <WindowDimensions>
                    <Apps
                      createRoutes={(t) => create(t)}
                    />
                  </WindowDimensions>
                </HashRouter>
              </Events>
            </BlockAuthors>
          </Api>
        </Queue>
      </ThemeProvider>
    </Suspense>
  );
}

export default React.memo(ApiWrapper);
