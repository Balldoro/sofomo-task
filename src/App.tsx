import { Container } from "@chakra-ui/react";

import { AppProviders } from "components/AppProviders";
import { CurrentLocationMap } from "features/CurrentLocationMap";

const App = () => {
  return (
    <AppProviders>
      <Container maxW="container.xl">
        <CurrentLocationMap />
      </Container>
    </AppProviders>
  );
};

export default App;
