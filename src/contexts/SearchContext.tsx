import { createContext, useContext, useState } from "react";

import { getLookupIpAddress } from "api";
import { handleIpSearchError } from "features/SearchBox/utils";
import { IpInfo } from "types";
import { getItemFromSs, setItemToSs } from "utils/ssStorage";
import { SEARCH_HISTORY_SS_NAME } from "constants/index";

interface HistoryItem {
  value: string;
}

interface State {
  searchValue: string;
  locationData: IpInfo | null;
  isLoading: boolean;
  error: string | null;
  historyResults: HistoryItem[];
  searchForResults: () => Promise<void>;
  searchFromHistory: (value: string) => Promise<void>;
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

  const [historyResults, setHistoryResults] = useState<HistoryItem[]>(
    () => getItemFromSs(SEARCH_HISTORY_SS_NAME) || []
  );

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const fetchAddressByIp = async (value: string) => {
    try {
      setIsLoading(true);
      const data = await getLookupIpAddress(value);
      setLocationData(data);
      setError(null);
    } catch (err: any) {
      const errorMessage = handleIpSearchError(err);
      setError(errorMessage);
    }
    setIsLoading(false);
  };

  const saveSearchToHistory = (value: string) => {
    const newItem = { value };
    setHistoryResults((results) => [...results, newItem]);
    setItemToSs(SEARCH_HISTORY_SS_NAME, [...historyResults, newItem]);
  };

  const searchForResults = async () => {
    saveSearchToHistory(searchValue);
    await fetchAddressByIp(searchValue);
  };

  const searchFromHistory = async (value: string) => {
    updateSearchValue(value);
    await fetchAddressByIp(value);
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        historyResults,
        locationData,
        isLoading,
        error,
        searchForResults,
        searchFromHistory,
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
