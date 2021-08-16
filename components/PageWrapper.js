import { Box } from '@chakra-ui/react';

import Footer from './Footer';

export default function Container({ children }) {
  return (
    <>
      <Box maxW="768px" w="100%" px={[5, 8]} mx="auto">
        {children}
      </Box>
      <Footer />
    </>
  );
}
