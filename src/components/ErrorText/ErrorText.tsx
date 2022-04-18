import { Center, Text, TextProps } from "@chakra-ui/react";

interface ErrorTextProps extends TextProps {
  isCentered?: boolean;
}

export const ErrorText = ({
  isCentered = false,
  children,
  ...props
}: ErrorTextProps) => {
  const InfoText = (
    <Text color="red.500" role="alert" {...props}>
      {children}
    </Text>
  );

  if (isCentered) {
    return <Center h="100%">{InfoText}</Center>;
  }

  return InfoText;
};
