export type IpInfo = {
  city: string;
  ip: string;
  latitude: number;
  longitude: number;
  country_code: string;
  country_name: string;
  location: IpInfoLocation;
};

export interface IpInfoLocation {
  capital: string;
  country_flag: string;
}

export interface IpStackErrorResponse {
  success: false;
  error: {
    code: number;
    info: string;
    type: string;
  };
}

export type IpInfoApiResponse = IpInfo | IpStackErrorResponse;
