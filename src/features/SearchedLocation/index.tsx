import { Box, Stack } from "@chakra-ui/react";

import { SearchedLocationMap } from "features/SearchedLocationMap";
import { SearchedLocationInfoPanel } from "features/SearchedLocationInfoPanel";
import { useSearchContext } from "contexts/SearchContext";

export const SearchedLocation = () => {
  const { locationData } = useSearchContext();

  return (
    <Box w="100%">
      {locationData && (
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing="8"
          align="stretch"
          justify="space-between"
          w="100%">
          <Box flexBasis="60%">
            <SearchedLocationMap
              longitude={locationData.longitude}
              latitude={locationData.latitude}
            />
          </Box>
          <Box flexBasis="40%">
            <SearchedLocationInfoPanel locationData={locationData} />
          </Box>
        </Stack>
      )}
    </Box>
  );
};
