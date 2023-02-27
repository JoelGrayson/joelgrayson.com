import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient=new QueryClient();
    
    console.log(
`┏---------------------------------------┓
|                                       |
|            jjjjjjjjj                  |
|        jjjjjjjjjjjjjjj                |
|     jjjjjjjjjjjjjjjjjjj               |
|    jjjjjjjjj      jjjjj   jjjjjjjjj   |
|    jjjjj          jjjjjjjjjjjjjjjjj   |
|                  jjjjjjjjjjjjj        |
|              jjjjjjjjjj               |
|           jjjjjjjjjjjj  jjjj    jjjj  |
|        jjjjjjjjjjjjjj  jjjjjj  jjjjjj |
|      jjjjjjjjjjjjjjjj   jjjj    jjjj  |
|    jjjjjjjj   jjjjjj        jjjj      |
|   jjjjjj    jjjjjjj        jjjjjj     |
|  jjjjj    jjjjjjjj          jjjj      |
|  jjjjj  jjjjjjjj                      |
|  jjjjjjjjjjjj                         |
|   jjjjjjjj           joelgrayson.com  |
|                                       |
┖---------------------------------------┛`);

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
