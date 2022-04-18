import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Marker } from "react-map-gl";

import { getUserIpAddress } from "api";
import { IpInfo } from "types";
import { MapBase } from "components/MapBase";
import { Loader } from "components/Loader";
import { ErrorText } from "components/ErrorText/ErrorText";

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

  return (
    <Box w="100%" h="400px" mt="4" borderWidth="1px" borderColor="gray.300">
      {isLoading ? (
        <Loader isCentered />
      ) : (
        isError && <ErrorText isCentered>There was some error</ErrorText>
      )}
      {latitude && longitude && (
        <MapBase
          initialViewState={{ longitude, latitude, zoom: 9 }}
          style={{ height: "100%" }}>
          <Marker longitude={longitude} latitude={latitude} />
        </MapBase>
      )}
    </Box>
  );
};
