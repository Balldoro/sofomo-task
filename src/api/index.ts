import { axiosIpStack } from "api/axiosInstances";

export const getUserIpAddress = async () => {
  const { data } = await axiosIpStack.get(`/check`);
  return data;
};

export const getLookupIpAddress = async (ip: string) => {
  const { data } = await axiosIpStack.get(`/${ip}`);
  return data;
};
