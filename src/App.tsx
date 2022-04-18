import { Container, VStack } from "@chakra-ui/react";

import { AppProviders } from "components/AppProviders";
import { SearchBox } from "features/SearchBox";
import { CurrentLocation } from "features/CurrentLocation";

const App = () => {
  return (
    <AppProviders>
      <Container maxW="container.xl">
        <VStack spacing="4">
          <CurrentLocation />
          <SearchBox />
        </VStack>
      </Container>
    </AppProviders>
  );
};

export default App;
