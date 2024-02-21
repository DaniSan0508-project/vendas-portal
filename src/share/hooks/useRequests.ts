import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from './userGlobalContext';
import { ConnectionApiPost } from '../functions/connection/connectionApi';

const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    try {
      const result = await axios.post(url);
      return result.data;
    } catch (error) {
      alert('Usuário ou senha inválido');
    } finally {
      setLoading(false);
    }
  };

  const postRequest = async <T>(url: string, body: any): Promise<T | undefined> => {
    setLoading(true);
    const returnData = await <T>ConnectionApiPost(url, body)
      .then((result) => {
        setNotification(
          'Logado',
          'success',
          'Seja bem vindo ao portal de vendas xD',
        );
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });
    setLoading(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};

export { useRequests };
