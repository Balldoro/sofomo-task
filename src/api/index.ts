import { axiosIpStack } from "api/axiosInstances";
import { isApiError } from "utils/isApiError";
import { IpInfoApiResponse } from "types";
import {
  GENERAL_API_ERROR_MESSAGE,
  INVALID_IP_ERROR_CODE,
  INVALID_IP_ERROR_MESSAGE,
} from "constants/index";

export const getUserIpAddress = async () => {
  const { data } = await axiosIpStack.get<IpInfoApiResponse>(`/check`);

  if (isApiError(data)) {
    throw new Error(GENERAL_API_ERROR_MESSAGE);
  }

  return data;
};

export const getLookupIpAddress = async (ip: string) => {
  const { data } = await axiosIpStack.get(`/${ip}`);

  if (isApiError(data)) {
    if (data.error.code === INVALID_IP_ERROR_CODE) {
      throw new Error(INVALID_IP_ERROR_MESSAGE);
    }
    throw new Error(GENERAL_API_ERROR_MESSAGE);
  }

  return data;
};
