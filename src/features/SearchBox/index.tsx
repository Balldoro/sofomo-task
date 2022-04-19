import { Box, Button, HStack } from "@chakra-ui/react";

import { TextField } from "components/TextField";
import { useSearchContext } from "contexts/SearchContext";

export const SearchBox = () => {
  const { searchValue, isLoading, error, updateSearchValue, searchForResults } =
    useSearchContext();

  const disabledSubmit = isLoading || !searchValue.trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await searchForResults();
  };

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit}>
        <HStack w="100%">
          <TextField
            label="Search IP/URL"
            error={error}
            value={searchValue}
            onChange={(e) => updateSearchValue(e.target.value)}
          />
          <Button
            type="submit"
            minW={{ sm: "120px" }}
            fontSize={{ base: "sm", sm: "md" }}
            isLoading={isLoading}
            isDisabled={disabledSubmit}
            disabled={disabledSubmit}>
            Search
          </Button>
        </HStack>
      </form>
    </Box>
  );
};
