import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

import { getLookupIpAddress } from "api";
import { handleIpSearchError } from "./utils";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const disabledSubmit = isLoading || !value.trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await getLookupIpAddress(value);
      setError(null);
    } catch (err: any) {
      const errorMessage = handleIpSearchError(err);
      setError(errorMessage);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <HStack w="100%">
        <FormControl isInvalid={Boolean(error)}>
          <FormLabel>Search IP/URL</FormLabel>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          {error ? (
            <FormErrorMessage role="alert">{error}</FormErrorMessage>
          ) : (
            <Box>&nbsp;</Box>
          )}
        </FormControl>
        <Button
          type="submit"
          minW="120px"
          isLoading={isLoading}
          isDisabled={disabledSubmit}
          disabled={disabledSubmit}>
          Search
        </Button>
      </HStack>
    </form>
  );
};
