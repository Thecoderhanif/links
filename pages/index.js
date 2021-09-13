import Link from 'next/link';
import { NextSeo } from 'next-seo';
import {
  Box,
  Text,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import ProjectCard from '@/components/ProjectCard';
import Timeline from '@/components/Timeline';

import { Notion, React } from '@/styles/icons';

const meta = {
  title: 'Opa Kholis Majid - Frontend Developer'
};

const Index = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <>
      <NextSeo title={meta.title} titleTemplate="%s" />
      <Box pb={5} pt={2}>
        <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
          Halo Semua.
        </Heading>
        <Text color={secondaryText} lineHeight="tall">
          Perkenalkan, nama saya Opa Kholis Majid. Seseorang yang menyebut
          dirinya sebagai Frontend developer—yang mana sekarang sedang senang
          ber-eksplorasi dengan Linux distribution dan Open-source software.
        </Text>
        <Link href="/whoami" passHref>
          <Button as="a" fontSize="sm" my={5} variant="outline">
            Selengkapnya tentang Opa
          </Button>
        </Link>
      </Box>

      <Box py={5}>
        <Heading as="h2" fontSize="3xl" letterSpacing="tight" mb={5}>
          Project Terbaru
        </Heading>
        <ProjectCard
          title="React21"
          description="Kumpulan project sederhana yang dipelajari dari internet. Dibangun dengan Library React.js dan di deploy menggunakan vercel."
          href="https://react21.vercel.app"
        >
          <React boxSize={12} mr={4} />
        </ProjectCard>
        <ProjectCard
          title="Bookshelf"
          description='Saya tidak suka menyimpan buku fisik. Sebagai gantinya saya membuat "Perpustakaan pribadi" dengan memanfaatkan Notion sebagai database.'
          href="https://books.opakholis.dev"
        >
          <Notion boxSize={12} mr={4} />
        </ProjectCard>
      </Box>
      <Timeline />
    </>
  );
};

export default Index;
