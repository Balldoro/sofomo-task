import { Box } from "@chakra-ui/react";
import { Marker } from "react-map-gl";

import { MapBase } from "components/MapBase";
import { INITIAL_MAP_ZOOM } from "constants/index";

interface CurrentLocationMapProps {
  longitude: number;
  latitude: number;
}

export const CurrentLocationMap = ({
  longitude,
  latitude,
}: CurrentLocationMapProps) => {
  return (
    <Box w="100%" h="400px" borderWidth="1px" borderColor="gray.200">
      <MapBase
        initialViewState={{ longitude, latitude, zoom: INITIAL_MAP_ZOOM }}>
        <Marker longitude={longitude} latitude={latitude} />
      </MapBase>
    </Box>
  );
};
