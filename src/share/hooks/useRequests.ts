import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from './userGlobalContext';

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

  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    try {
      const result = await axios.post(url, body);
      setNotification(
        'Seja Bem vindo',
        'success',
        'Seja bem vindo ao portal web xD',
      );
      return result.data;
    } catch (error) {
      setNotification('Senha inválida', 'error');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};

export { useRequests };
