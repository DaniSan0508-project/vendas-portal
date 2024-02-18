import axios from 'axios';
import { useState } from 'react';

const useRequests = () => {
  const [loading, setLoading] = useState(false);

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
      return result.data;
    } catch (error) {
      alert('Usuário ou senha inválido');
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
