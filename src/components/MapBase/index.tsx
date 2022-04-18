import Map, { MapProps } from "react-map-gl";

export const MapBase = ({ children, ...props }: MapProps) => {
  return (
    /* @ts-ignore */
    <Map
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      {...props}>
      {children}
    </Map>
  );
};
