import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import { getAuthorizationToken, setAuthotizationToken } from '../functions/connection/auth';

interface IGlobalData {
  accessToken?: string;
  notification?: INotificationProps;
}

type NotificationType = 'success' | 'info' | 'warning' | 'error';
interface INotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
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
    accessToken: '',
    notification: {
      message: '',
      type: 'success',
    },
  });

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  useEffect(() => {
    const token = getAuthorizationToken();

    if (token) {
      setAccessToken(token);
    };
  }, []);


  const setAccessToken = (accessToken: string) => {
    setAuthotizationToken(accessToken);
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  const setNotification = (
    message: string,
    type: NotificationType,
    description?: string,
  ) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };
  return {
    notification: globalData?.notification,
    accessToken: globalData?.accessToken || 'teste',
    setAccessToken,
    setNotification,
  };
};

export { GlobalProvider, useGlobalContext };
