import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getUserIpAddress } from "api";
import { IpInfo } from "types";
import { CurrentLocationMap } from "features/CurrentLocationMap";
import { Loader } from "components/Loader";
import { ErrorText } from "components/ErrorText/ErrorText";
import { InfoPanel } from "components/InfoPanel";
import { CenteredFlexWrapper } from "components/CenteredFlexWrapper";

export const CurrentLocation = () => {
  const [userInfo, setUserInfo] = useState<IpInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUserIP = async () => {
      setIsLoading(true);
      try {
        const data = await getUserIpAddress();
        setUserInfo(data);
        setIsError(false);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchUserIP();
  }, []);

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
    <Box w="100%">
      {userInfo && (
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing="8"
          align="stretch"
          justify="space-between"
          mt="4">
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
        </Stack>
      )}
    </Box>
  );
};
