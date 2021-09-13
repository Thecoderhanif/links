import 'focus-visible/dist/focus-visible';
import '@fontsource/inter/variable.css';

import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider, useColorMode, Box } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';

import Nav from '@/components/Nav';
import PageWrapper from '@/components/PageWrapper';
import MDXComponents from '@/components/MDXComponents';

import themes from '@/styles/theme';
import { prismDarkTheme, prismLightTheme } from '@/styles/prism';

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

const meta = {
  title: 'Opa Kholis Majid - Frontend Developer',
  desciption:
    'Seseorang yang menyebut dirinya sebagai Frontend developer—yang mana sekarang sedang senang ber-eksplorasi dengan Linux distribution dan Open-source Software.',
  url: 'https://opakholis.dev'
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
        <DefaultSeo
          canonical={`${meta.url}${router.asPath || '/'}`}
          title={meta.title}
          titleTemplate={`%s - Opa Kholis Majid`}
          description={meta.desciption}
          openGraph={{
            type: 'website',
            locale: 'id_ID',
            title: meta.title,
            description: meta.desciption,
            site_name: meta.url,
            images: [
              {
                url: 'https://opakholis.dev/static/images/og.jpg',
                alt: meta.title,
                width: 1280,
                height: 720
              }
            ]
          }}
          twitter={{
            handle: '@opakholis',
            site: '@opakholis',
            cardType: 'summary_large_image'
          }}
        />
        <SocialProfileJsonLd
          type="Person"
          name="Opa Kholis Majid"
          url={meta.url}
          sameAs={['https://github.com/opxop', 'httos://twitter.com/opakholis']}
        />
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
