import { IpInfoApiResponse, IpStackErrorResponse } from "types";

export const isApiError = (
  data: IpInfoApiResponse
): data is IpStackErrorResponse => "success" in data;
