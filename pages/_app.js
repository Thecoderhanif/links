import 'focus-visible/dist/focus-visible';

import Head from 'next/head';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import NextNprogress from 'nextjs-progressbar';

import { AuthProvider } from '@/lib/firebase/auth';

import MDXComponents from '@/components/MDXComponents';

import themes, { FontFace } from '@/styles/theme';
import { prismDarkTheme, prismLightTheme } from '@/styles/prism';

import SEO from '../next-seo.config';

const PrismTheme = () => {
  const { colorMode } = useColorMode();
  return (
    <Global
      styles={css`
        ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
      `}
    />
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={themes}>
      <AuthProvider>
        <FontFace />
        <NextNprogress
          color="linear-gradient(to right, #7928CA, #FF0080)"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
        <MDXProvider components={MDXComponents}>
          <PrismTheme />
          <DefaultSeo {...SEO} />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
