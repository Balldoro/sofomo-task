import { Container, VStack } from "@chakra-ui/react";

import { AppProviders } from "components/AppProviders";
import { SearchBox } from "features/SearchBox";
import { CurrentLocation } from "features/CurrentLocation";
import SearchContextProvider from "contexts/SearchContext";

const App = () => {
  return (
    <AppProviders>
      <Container maxW="container.xl">
        <VStack spacing="4">
          <CurrentLocation />
          <SearchContextProvider>
            <SearchBox />
          </SearchContextProvider>
        </VStack>
      </Container>
    </AppProviders>
  );
};

export default App;
