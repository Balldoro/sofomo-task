import { Flex, List, ListItem } from "@chakra-ui/react";

interface Item {
  label: string;
  value: string | number;
}

interface InfoListProps {
  items: Item[];
}

export const InfoList = ({ items }: InfoListProps) => {
  return (
    <List spacing="3">
      {items.map(({ label, value }) => (
        <Flex justify="space-between" key={label}>
          <ListItem fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>
            {label}
          </ListItem>
          <ListItem fontSize={{ base: "sm", md: "md" }}>{value}</ListItem>
        </Flex>
      ))}
    </List>
  );
};
