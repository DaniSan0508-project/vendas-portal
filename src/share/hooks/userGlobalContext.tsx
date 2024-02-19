import { createContext, useContext, useState } from 'react';
import React from 'react';

interface IGlobalData {
  accessToken?: string;
}

interface IGlobalContextProps {
  globalData: IGlobalData;
  setGlobalData: (globalData: IGlobalData) => void;
}

interface IGlobalProvider {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as IGlobalContextProps);

const GlobalProvider = ({ children }: IGlobalProvider) => {
  const [globalData, setGlobalData] = useState<IGlobalData>({
    accessToken: 'teste',
  });

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);
  const setAccessToken = (accessToken: string) => {
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };
  return {
    accessToken: globalData?.accessToken || 'teste',
    setAccessToken,
  };
};

export { GlobalProvider, useGlobalContext };
