import Link from 'next/link';
import { NextSeo } from 'next-seo';
import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

const meta = {
  title: '404',
  description:
    "Why show a generic 404 when I can make it sound mysterious? It seems you've found something that used to exist, or you spelled something wrong."
};

export default function Error() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description
        }}
      />
      <Box pb={5} pt={2}>
        <Heading letterSpacing="tight" mb={4} as="h1" fontSize={['4xl', '5xl']}>
          451 - Unavailable For Legal Reasons
        </Heading>
        <Text color={secondaryText} lineHeight="tall" mt={4} mb={8}>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </Text>
        <Flex mt={2} mb={6} justifyContent="center">
          <Link href="/" passHref>
            <Button as="a" p={[5, 6]} fontWeight="bold">
              Back to Home
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
