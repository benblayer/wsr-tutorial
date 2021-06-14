import React, { Suspense } from 'react';
import { create as createFedopsLogger } from '@wix/fedops-logger';
import type { ServerProps } from '@wix/yoshi-flow-fullstack/build/types';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import App from '../components/App';

const fedopsLogger = createFedopsLogger('generated');

interface AppProps extends ServerProps {}

export default (props: AppProps) => {
  // Move the following `appLoaded()` call to the point where your app has fully loaded.
  // See https://github.com/wix-private/fed-infra/blob/master/fedops/fedops-logger/README.md
  fedopsLogger.appLoaded();

  return (
    <Suspense fallback="...loading">
      <I18nextProvider i18n={i18n(props.locale)}>
        <App />
      </I18nextProvider>
    </Suspense>
  );
};
