import { Box } from "@chakra-ui/react";
import { Marker } from "react-map-gl";

import { MapBase } from "components/MapBase";

interface CurrentLocationMapProps {
  longitude: number;
  latitude: number;
}

const INITIAL_ZOOM = 10;

export const CurrentLocationMap = ({
  longitude,
  latitude,
}: CurrentLocationMapProps) => {
  return (
    <Box w="100%" h="400px" borderWidth="1px" borderColor="gray.200">
      {longitude && latitude && (
        <MapBase initialViewState={{ longitude, latitude, zoom: INITIAL_ZOOM }}>
          <Marker longitude={longitude} latitude={latitude} />
        </MapBase>
      )}
    </Box>
  );
};
