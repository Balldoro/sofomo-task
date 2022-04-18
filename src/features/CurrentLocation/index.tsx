import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { getUserIpAddress } from "api";
import { IpInfo } from "types";
import { CurrentLocationMap } from "features/CurrentLocationMap";
import { CurrentLocationInfoPanel } from "features/CurrentLocationInfoPanel";
import { Loader } from "components/Loader";
import { ErrorText } from "components/ErrorText/ErrorText";

const CenteredWrapper = ({ children }: { children: React.ReactNode }) => (
  <Flex
    w="100%"
    minH="100px"
    mt="4"
    justify="center"
    align="center"
    direction="column"
    borderColor="gray.200"
    borderWidth="1px"
    p="6">
    {children}
  </Flex>
);

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
      <CenteredWrapper>
        <Loader />
      </CenteredWrapper>
    );
  }

  if (isError) {
    return (
      <CenteredWrapper>
        <ErrorText>There was an error</ErrorText>
      </CenteredWrapper>
    );
  }

  return (
    <Box>
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
            <CurrentLocationInfoPanel locationData={userInfo} />
          </Box>
        </Stack>
      )}
    </Box>
  );
};
