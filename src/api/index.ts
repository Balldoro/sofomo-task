import { axiosIpStack } from "api/axiosInstances";
import { isApiError } from "utils/isApiError";
import { IpInfoApiResponse } from "types";

export const getUserIpAddress = async () => {
  const { data } = await axiosIpStack.get<IpInfoApiResponse>(`/che78ck`);

  if (isApiError(data)) {
    throw new Error("Mapbox error");
  }

  return data;
};

export const getLookupIpAddress = async (ip: string) => {
  const { data } = await axiosIpStack.get(`/${ip}`);
  return data;
};
