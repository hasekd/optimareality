import { SearchInputProvider } from "@/context/SearchInputContext";
import chakraTheme from "@/styles/styles";
import { ChakraProvider } from "@chakra-ui/react";
import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={chakraTheme}>
          <SearchInputProvider>
            <main className={font.className}>
              <Component {...pageProps} />
            </main>
          </SearchInputProvider>
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
