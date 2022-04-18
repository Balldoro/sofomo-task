import { INVALID_IP_ERROR_MESSAGE } from "constants/index";

export const handleIpSearchError = (err: any) => {
  if (err.message === INVALID_IP_ERROR_MESSAGE) {
    return "Incorrect value. Please provide IP address or URL";
  }
  return "There was some error. Please try again later.";
};
