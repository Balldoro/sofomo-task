import { Box, Center, CircularProgress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Marker } from "react-map-gl";

import { getUserIpAddress } from "api";
import { MapBase } from "components/MapBase";
import { IpInfo } from "types";

export const CurrentLocationMap = () => {
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

  const { latitude, longitude } = userInfo || {};

  if (isLoading) {
    return (
      <Center h="400px" mt="4" borderWidth="1px" borderColor="gray.300">
        <CircularProgress isIndeterminate thickness="3px" color="purple" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center h="400px" mt="4" borderWidth="1px" borderColor="gray.300">
        <Text>There was some error</Text>
      </Center>
    );
  }

  return (
    <Box w="100%" mt="4" borderWidth="1px" borderColor="gray.300">
      {latitude && longitude && (
        <MapBase
          initialViewState={{ longitude, latitude, zoom: 9 }}
          style={{ height: "400px", width: "100%" }}>
          <Marker longitude={longitude} latitude={latitude} />
        </MapBase>
      )}
    </Box>
  );
};
