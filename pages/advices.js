import useSWR from 'swr';
import { NextSeo } from 'next-seo';
import {
  Box,
  Text,
  Flex,
  Heading,
  Spinner,
  useColorModeValue
} from '@chakra-ui/react';

import AdviceForm from '@/components/AdviceForm';
import AdviceMessage from '@/components/AdviceMessage';
import { AuthProvider } from '@/lib/firebase/auth';
import fetcher from '@/lib/fetcher';

const url = 'https://opakholis.dev/advices';
const title = 'Pesanmu - Opa Kholis Majid';
const description =
  'Keluh kesah, pendapat, informasi, atau bahkan nasihat untuk Opa.';

export default function AdviceMe() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  const spinner = useColorModeValue('gray.900', 'white');

  const { data } = useSWR('/api/advices', fetcher);

  return (
    <AuthProvider>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />

      <Box pb={5} pt={2}>
        <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
          Pesan untuk Opa.
        </Heading>
        <Text color={secondaryText} lineHeight="tall">
          Halaman ini dibuat untuk menampung segala keluh kesah, pendapat,
          informasi, atau bahkan nasihat untuk <b>Opa Kholis Majid</b>.
        </Text>
        <AdviceForm />
        {data ? (
          <AdviceMessage advices={data.advices} />
        ) : (
          <Flex justifyContent="center" justifyItems="center">
            <Spinner thickness="3px" speed="0.65s" color={spinner} />
          </Flex>
        )}
      </Box>
    </AuthProvider>
  );
}
