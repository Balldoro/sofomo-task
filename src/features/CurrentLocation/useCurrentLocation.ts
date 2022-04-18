import { useEffect, useState } from "react";

import { getUserIpAddress } from "api";
import { IpInfo } from "types";

export const useCurrentLocation = () => {
  const [userInfo, setUserInfo] = useState<IpInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUserIP = async () => {
      setIsLoading(true);
      try {
        const data = await getUserIpAddress();
        setUserInfo(data);
        setIsError(false);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchUserIP();
  }, []);

  return { userInfo, isLoading, isError };
};
