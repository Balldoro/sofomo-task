import { ForwardedRef, forwardRef } from "react";
import Map, { MapProps, MapRef } from "react-map-gl";

export const MapBase = forwardRef(
  ({ children, ...props }: MapProps, ref: ForwardedRef<MapRef>) => {
    return (
      /* @ts-ignore */
      <Map
        ref={ref}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        {...props}>
        {children}
      </Map>
    );
  }
);
