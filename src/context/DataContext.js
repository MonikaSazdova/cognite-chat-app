import React, { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, loading, error } = useFetch("https://gist.githubusercontent.com/bites2bytes/20b97cdb45c73a0430d48a021e36cf6e/raw/855c9bc0c767583130b2910f6b51d8a292b09135/chatData.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)