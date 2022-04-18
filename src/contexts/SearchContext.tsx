import { getLookupIpAddress } from "api";
import { handleIpSearchError } from "features/SearchBox/utils";
import { createContext, useContext, useState } from "react";
import { IpInfo } from "types";

interface State {
  searchValue: string;
  locationData: IpInfo | null;
  isLoading: boolean;
  error: string | null;
  searchForResults: () => Promise<void>;
  updateSearchValue: (value: string) => void;
}

const SearchContext = createContext<State | undefined>(undefined);

interface SearchContextProviderProps {
  children: React.ReactNode;
}

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [locationData, setLocationData] = useState<IpInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const searchForResults = async () => {
    try {
      setIsLoading(true);
      const data = await getLookupIpAddress(searchValue);
      setLocationData(data);
      setError(null);
    } catch (err: any) {
      const errorMessage = handleIpSearchError(err);
      setError(errorMessage);
    }
    setIsLoading(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        locationData,
        isLoading,
        error,
        searchForResults,
        updateSearchValue,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Search Context used outside of Provider!");
  }
  return context;
};

export default SearchContextProvider;
