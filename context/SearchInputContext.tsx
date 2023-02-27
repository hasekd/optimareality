import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type SearchInputProviderProps = {
  children: ReactNode;
};

type SearchInputContext = {
  searchQuery: any;
  setSearchQuery: any;
  filteredProp: any;
  setFilteredProp: any;
};

const SearchInputContext = createContext({} as SearchInputContext);

export const useSearchInput = () => {
  return useContext(SearchInputContext);
};

export const SearchInputProvider = ({ children }: SearchInputProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProp, setFilteredProp] = useState([]);

  useEffect(() => {
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      setSearchQuery(storedQuery);
    }

    const storedFilteredProp = localStorage.getItem("filteredItems");
    if (storedFilteredProp) {
      setFilteredProp(JSON.parse(storedFilteredProp));
    }
  }, []);

  return (
    <SearchInputContext.Provider
      value={{ searchQuery, setSearchQuery, filteredProp, setFilteredProp }}
    >
      {children}
    </SearchInputContext.Provider>
  );
};
