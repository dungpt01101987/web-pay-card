import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'App';
import { IntlProvider } from 'react-intl';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'api/config/queryClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from 'components/GlobalStyles';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const loadLocaleData = (location) => {
  switch (location) {
    case 'en':
      return import('resource/language/en.json');
    case 'vi':
      return import('resource/language/vi.json');
    default:
      return import('resource/language/en.json');
  }
}

const RootApp = async () => {
  const location = navigator.language;
  const message = await loadLocaleData(location);
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <IntlProvider locale={location} messages={message.default}>
            <GlobalStyles>
              <App />
            </GlobalStyles>
          </IntlProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}
RootApp().then();