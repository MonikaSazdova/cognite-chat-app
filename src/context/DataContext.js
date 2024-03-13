import React, { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { DATA_URL } from "../constants/constants";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, loading, error } = useFetch(DATA_URL);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
