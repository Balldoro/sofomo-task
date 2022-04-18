import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Marker } from "react-map-gl";

import { MapBase } from "components/MapBase";
import { INITIAL_MAP_ZOOM } from "constants/index";

interface SearchedLocationMapProps {
  longitude: number;
  latitude: number;
}

export const SearchedLocationMap = ({
  longitude,
  latitude,
}: SearchedLocationMapProps) => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo({ center: [longitude, latitude] });
    }
  }, [latitude, longitude]);

  return (
    <Box w="100%" h="400px" borderWidth="1px" borderColor="gray.200">
      <MapBase
        initialViewState={{ longitude, latitude, zoom: INITIAL_MAP_ZOOM }}
        ref={mapRef}>
        <Marker longitude={longitude} latitude={latitude} />
      </MapBase>
    </Box>
  );
};
