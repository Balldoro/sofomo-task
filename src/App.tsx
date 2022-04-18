import { Container } from "@chakra-ui/react";

import { AppProviders } from "components/AppProviders";
import { CurrentLocation } from "features/CurrentLocation";

const App = () => {
  return (
    <AppProviders>
      <Container maxW="container.xl">
        <CurrentLocation />
      </Container>
    </AppProviders>
  );
};

export default App;
