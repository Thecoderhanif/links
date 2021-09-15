import { NextSeo } from 'next-seo';
import { Text, Heading } from '@chakra-ui/react';

import Container from '@/components/Container';

const meta = {
  title: 'Uses',
  description: 'Apa yang Opa gunakan sekarang.'
};

export default function UsesLayout({ children }) {
  return (
    <Container>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
      />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        /uses
      </Heading>
      <Text lineHeight="taller">
        Daftar peralatan yang saya gunakan dalam kehidupan sehari-hari.
      </Text>
      {children}
    </Container>
  );
}
