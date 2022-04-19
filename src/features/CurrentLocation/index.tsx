import { Box } from "@chakra-ui/react";

import { CurrentLocationMap } from "features/CurrentLocationMap";
import { Loader } from "components/Loader";
import { ErrorText } from "components/ErrorText/ErrorText";
import { InfoPanel } from "components/InfoPanel";
import { CenteredFlexWrapper } from "components/CenteredFlexWrapper";
import { useCurrentLocation } from "./useCurrentLocation";
import { StackContainer } from "components/StackContainer";

export const CurrentLocation = () => {
  const { userInfo, isLoading, isError } = useCurrentLocation();

  if (isLoading) {
    return (
      <CenteredFlexWrapper>
        <Loader />
      </CenteredFlexWrapper>
    );
  }

  if (isError) {
    return (
      <CenteredFlexWrapper>
        <ErrorText>There was an error</ErrorText>
      </CenteredFlexWrapper>
    );
  }

  return (
    <Box as="section" w="100%">
      {userInfo && (
        <StackContainer>
          <Box flexBasis="60%">
            <CurrentLocationMap
              longitude={userInfo.longitude}
              latitude={userInfo.latitude}
            />
          </Box>
          <Box flexBasis="40%">
            <InfoPanel
              locationData={userInfo}
              title="Current location information"
            />
          </Box>
        </StackContainer>
      )}
    </Box>
  );
};
