import { Button, ButtonProps, ListItem } from "@chakra-ui/react";

interface ListItemButtonProps extends ButtonProps {}

export const ListItemButton = ({ children, ...props }: ListItemButtonProps) => {
  return (
    <ListItem
      py="2"
      fontWeight="semibold"
      fontSize={{ base: "sm", md: "md" }}
      borderBottomWidth="1px"
      borderBottomColor="gray.200">
      <Button variant="unstyled" w="100%" textAlign="left" {...props}>
        {children}
      </Button>
    </ListItem>
  );
};
