import { Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

import { getLookupIpAddress } from "api";
import { handleIpSearchError } from "./utils";
import { TextField } from "components/TextField";

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
        <TextField
          label="Search IP/URL"
          error={error}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
  );
};
