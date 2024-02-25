import { Spin } from 'antd';
import { useEffect } from 'react';
import { getAuthorizationToken } from '../../../share/functions/connection/auth';
import { useNavigate } from 'react-router-dom';
import { ProductRoutesEnum } from '../../products/routes';
import { LoginRoutesEnum } from '../../login/routes';

const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      navigate(ProductRoutesEnum.PRODUCT);
    } else {
      navigate(LoginRoutesEnum.LOGIN);
    }
  }, []);

  return <Spin />;
};

export { FirstScreen };
