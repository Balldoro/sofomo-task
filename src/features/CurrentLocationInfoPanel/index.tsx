import { Box, Divider, Heading } from "@chakra-ui/react";
import { InfoList } from "components/InfoList";

import { IpInfo } from "types";

type CurrentLocationInfoPanelProps = {
  locationData: Pick<
    IpInfo,
    "ip" | "city" | "latitude" | "longitude" | "country_name"
  >;
};

export const CurrentLocationInfoPanel = ({
  locationData: { ip, country_name: countryName, city, latitude, longitude },
}: CurrentLocationInfoPanelProps) => {
  const items = [
    { label: "Ip Address:", value: ip },
    { label: "Country:", value: countryName },
    { label: "City:", value: city },
    { label: "Longitude:", value: longitude },
    { label: "Latitude:", value: latitude },
  ];

  return (
    <Box w="100%" h="100%" borderColor="gray.200" borderWidth="1px" p="6">
      <Heading as="h2" fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}>
        Current location information
      </Heading>
      <Divider my="4" />
      <InfoList items={items} />
    </Box>
  );
};
