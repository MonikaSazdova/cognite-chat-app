import React, { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const link = "https://gist.githubusercontent.com/bites2bytes/20b97cdb45c73a0430d48a021e36cf6e/raw/36f5cc2e9392d34c86aa1b57bff178d4ad9dc216/chatData.json"
  const { data, loading, error } = useFetch(link);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)