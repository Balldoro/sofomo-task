import { Box, Container, Stack, VStack } from "@chakra-ui/react";

import { AppProviders } from "components/AppProviders";
import { SearchBox } from "features/SearchBox";
import { CurrentLocation } from "features/CurrentLocation";
import SearchContextProvider from "contexts/SearchContext";
import { SearchedLocation } from "features/SearchedLocation";
import { SearchHistory } from "features/SearchHistory";

const App = () => {
  return (
    <AppProviders>
      <Container as="main" maxW="container.xl" minH="100vh" h="1px" py="6">
        <Stack
          direction={{ base: "column", lg: "row" }}
          h="100%"
          spacing="8"
          w="100%">
          <SearchContextProvider>
            <Box flexBasis="20%" h="100%" mt="4">
              <SearchHistory />
            </Box>
            <VStack spacing="4" flexBasis="80%">
              <CurrentLocation />
              <SearchBox />
              <SearchedLocation />
            </VStack>
          </SearchContextProvider>
        </Stack>
      </Container>
    </AppProviders>
  );
};

export default App;
