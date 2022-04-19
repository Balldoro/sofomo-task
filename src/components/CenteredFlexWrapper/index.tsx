import { Flex } from "@chakra-ui/react";

interface CenteredFlexWrapperProps {
  children: React.ReactNode;
}

export const CenteredFlexWrapper = ({ children }: CenteredFlexWrapperProps) => {
  return (
    <Flex
      w="100%"
      minH="100px"
      mt="4"
      justify="center"
      align="center"
      direction="column"
      borderColor="gray.200"
      borderWidth="1px"
      p="6">
      {children}
    </Flex>
  );
};
