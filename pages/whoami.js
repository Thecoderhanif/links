import { NextSeo } from 'next-seo';
import { Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react';

import { CustomLink } from '@/components/MDXComponents';

const meta = {
  title: 'Tentang'
};

export default function About() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <>
      <NextSeo title={meta.title} openGraph={{ title: meta.title }} />

      <VStack pb={5} pt={2} alignItems="flex-start">
        <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
          Tentang Opa.
        </Heading>
        <VStack color={secondaryText} spacing={3} alignItems="flex-start" lineHeight="tall">
          <Text>
            Saya sangat tertarik dengan dunia pemrograman dan Open-source Software. Saat ini sedang
            belajar tentang sisi Frontend dari platform web menggunakan bahasa pemrogramanan
            JavaScript serta UI Library ReactJs.
          </Text>
          <Text>
            Sebagaimana pada manusia umumnya, saya tidak sepenuhnya mengahabiskan waktu didepan{' '}
            <strike>teks editor</strike> IDE. Diluar kegiatan tulis-menulis kode, saya juga suka
            membaca buku, menonton film dan mendengarkan musik. Lemme know jika kita punya hobi yang
            sama!
          </Text>
          <Text>
            Jangan sungkan untuk&nbsp;
            <CustomLink href="/contact">menyapa saya</CustomLink> khususnya melalui surel, karena
            saya senang berkomunikasi dan khususnya berkenalan dengan orang baru.
          </Text>
          <Text>Anyway, senang berkenalan denganmu!</Text>
        </VStack>
      </VStack>
    </>
  );
}
