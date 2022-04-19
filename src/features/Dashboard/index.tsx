import { Box, Container, Stack, VStack } from "@chakra-ui/react";
import { CurrentLocation } from "features/CurrentLocation";
import { SearchBox } from "features/SearchBox";
import { SearchedLocation } from "features/SearchedLocation";
import { SearchHistory } from "features/SearchHistory";

export const Dashboard = () => {
  return (
    <Container as="main" maxW="container.xl" minH="100vh" h="1px" py="6">
      <Stack
        direction={{ base: "column", lg: "row" }}
        h="100%"
        spacing="8"
        w="100%">
        <Box flexBasis="20%" h="100%" mt="4">
          <SearchHistory />
        </Box>
        <VStack spacing="4" flexBasis="80%">
          <CurrentLocation />
          <SearchBox />
          <SearchedLocation />
        </VStack>
      </Stack>
    </Container>
  );
};
