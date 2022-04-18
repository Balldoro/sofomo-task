import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";

interface TextFieldProps extends InputProps {
  error: string | null;
  label: string;
}

export const TextField = ({ error, label, ...props }: TextFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel fontSize={{ base: "sm", md: "md" }}>{label}</FormLabel>
      <Input type="text" {...props} />
      {error ? (
        <FormErrorMessage role="alert">{error}</FormErrorMessage>
      ) : (
        <Box>&nbsp;</Box>
      )}
    </FormControl>
  );
};
