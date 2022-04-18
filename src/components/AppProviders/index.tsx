import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "theme";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
