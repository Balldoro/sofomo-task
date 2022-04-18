import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { getLookupIpAddress } from "api";
import { useState } from "react";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const disabledSubmit = isLoading || !value.trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await getLookupIpAddress(value);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <HStack w="100%">
        <FormControl isInvalid={isError}>
          <FormLabel>Search IP/URL</FormLabel>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          {!isError && <Box>&nbsp;</Box>}
          {isError && (
            <FormErrorMessage role="alert">
              Incorrect value. Please provide IP address or URL
            </FormErrorMessage>
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
