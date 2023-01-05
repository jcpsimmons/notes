import { Box, Center, Container, Link, Text } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <Container paddingY={"10px"}>
      <Center>
        <Link href="/">
          <Text fontSize={"xl"}>Notes</Text>
        </Link>
      </Center>
      <Box pt={"20px"}>{children}</Box>
    </Container>
  );
}
