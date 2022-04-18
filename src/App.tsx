import { Flex, Text } from "@chakra-ui/react";

import { AppProviders } from "components/AppProviders";

const App = () => {
  return (
    <AppProviders>
      <Flex justify="space-between">
        <Text>Hello App!</Text>
        <Text>Hello App!</Text>
      </Flex>
    </AppProviders>
  );
};

export default App;
