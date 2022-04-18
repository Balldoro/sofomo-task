import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const defaultColorSchemeComponents = withDefaultColorScheme({
  colorScheme: "purple",
  components: ["Button"],
});

const theme = extendTheme(defaultColorSchemeComponents, {
  fonts: {
    body: "Poppins, sans-serif",
  },
});

export default theme;
