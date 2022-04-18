import { IpInfoApiResponse, IpStackNotFoundResponse } from "types";

export const isEmptyResponse = (
  data: IpInfoApiResponse
): data is IpStackNotFoundResponse => "detail" in data;
