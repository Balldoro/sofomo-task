import { Stack, StackProps } from "@chakra-ui/react";

interface StackContainerProps extends StackProps {}

export const StackContainer = ({ children, ...props }: StackContainerProps) => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing="8"
      align="stretch"
      justify="space-between"
      {...props}>
      {children}
    </Stack>
  );
};
