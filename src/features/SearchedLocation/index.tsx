import { Box } from "@chakra-ui/react";

import { SearchedLocationMap } from "features/SearchedLocationMap";
import { useSearchContext } from "contexts/SearchContext";
import { Loader } from "components/Loader";
import { ErrorText } from "components/ErrorText/ErrorText";
import { InfoPanel } from "components/InfoPanel";
import { CenteredFlexWrapper } from "components/CenteredFlexWrapper";
import { StackContainer } from "components/StackContainer";

export const SearchedLocation = () => {
  const { locationData, isLoading, error } = useSearchContext();

  if (isLoading && !locationData) {
    return (
      <CenteredFlexWrapper>
        <Loader />
      </CenteredFlexWrapper>
    );
  }

  if (Boolean(error)) {
    return (
      <CenteredFlexWrapper>
        <ErrorText>{error}</ErrorText>
      </CenteredFlexWrapper>
    );
  }

  return (
    <Box as="section" w="100%">
      {locationData && (
        <StackContainer>
          <Box flexBasis="60%">
            <SearchedLocationMap
              longitude={locationData.longitude}
              latitude={locationData.latitude}
            />
          </Box>
          <Box flexBasis="40%">
            <InfoPanel
              locationData={locationData}
              title="Searched location information"
            />
          </Box>
        </StackContainer>
      )}
    </Box>
  );
};
