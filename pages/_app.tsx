import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, hydrate, dehydrate, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <Hydrate state={pageProps?.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
}

export default MyApp
