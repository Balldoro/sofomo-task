import {
  Center,
  CircularProgress,
  CircularProgressProps,
} from "@chakra-ui/react";

interface LoaderProps extends CircularProgressProps {
  isCentered?: boolean;
}

export const Loader = ({ isCentered = false, ...props }: LoaderProps) => {
  const Progress = (
    <CircularProgress
      isIndeterminate
      thickness="3px"
      color="purple"
      {...props}
    />
  );

  if (isCentered) {
    return <Center h="100%">{Progress}</Center>;
  }

  return Progress;
};
