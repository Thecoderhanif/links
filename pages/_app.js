import 'focus-visible/dist/focus-visible';
import '@fontsource/inter/variable.css';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider, useColorMode, Box } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import NextNprogress from 'nextjs-progressbar';

import Nav from '@/components/Nav';
import PageWrapper from '@/components/PageWrapper';
import MDXComponents from '@/components/MDXComponents';

import themes from '@/styles/theme';
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

// pre-defined styles for motion
const MotionBox = motion(Box);

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ChakraProvider resetCSS theme={themes}>
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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <PageWrapper>
          <Nav />
          <AnimatePresence initial={false} exitBeforeEnter>
            <MotionBox
              as="main"
              flexGrow={1}
              animate="enter"
              key={router.route}
              initial="initial"
              exit="exit"
              variants={{
                initial: { opacity: 0, y: -50 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 50 }
              }}
            >
              <Component {...pageProps} />
            </MotionBox>
          </AnimatePresence>
        </PageWrapper>
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;
