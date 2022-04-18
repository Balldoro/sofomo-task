import { axiosIpStack } from "api/axiosInstances";
import { isApiError } from "utils/isApiError";
import { IpInfoApiResponse } from "types";

export const getUserIpAddress = async () => {
  const { data } = await axiosIpStack.get<IpInfoApiResponse>(`/check`);

  if (isApiError(data)) {
    throw new Error("API Error");
  }

  return data;
};

export const getLookupIpAddress = async (ip: string) => {
  const { data } = await axiosIpStack.get(`/${ip}`);

  if (isApiError(data)) {
    throw new Error("API Error");
  }

  return data;
};
