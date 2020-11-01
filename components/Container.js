import React from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import {
  Button,
  Flex,
  IconButton,
  useColorMode,
  Box,
  Stack,
} from "@chakra-ui/core";

import Footer from "./Footer";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 9;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: backgroun-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };

  const primaryTextColor = {
    light: "black",
    dark: "white",
  };

  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  };

  return (
    <>
      <StickyNav
        as="nav"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
        />
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 3]} mx={1}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 3]} mx={1}>
              About
            </Button>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" p={[1, 3]} mx={1}>
              Contact
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 3]} mx={1}>
              Blog
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primaryTextColor[colorMode]}
        px={8}
      >
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxW="700px"
        >
          {children}
        </Stack>
        <Footer />
      </Flex>
    </>
  );
};

export default Container;