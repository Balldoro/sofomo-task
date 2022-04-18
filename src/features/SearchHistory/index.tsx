import { Box, Divider, Heading, List } from "@chakra-ui/react";

import { ListItemButton } from "components/ListItemButton";
import { useSearchContext } from "contexts/SearchContext";

export const SearchHistory = () => {
  const { historyResults, searchFromHistory } = useSearchContext();

  return (
    <Box
      as="section"
      w="100%"
      h="100%"
      borderColor="gray.200"
      borderWidth="1px"
      p="6">
      <Heading as="h2" fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}>
        History
      </Heading>
      <Divider mt="4" />
      <List>
        {historyResults.map(({ value }, idx) => (
          <ListItemButton
            key={`${value}${idx}`}
            onClick={() => searchFromHistory(value)}>
            {value}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
