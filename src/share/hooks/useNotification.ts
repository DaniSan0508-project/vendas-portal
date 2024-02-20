import { notification as antdNotification } from 'antd';
import { useGlobalContext } from './userGlobalContext';
import { useEffect } from 'react';

const useNotification = () => {
  const [api, contextHolder] = antdNotification.useNotification();
  const { notification } = useGlobalContext();

  useEffect(() => {
    if (notification?.message && notification.type) {
      api[notification.type]({
        message: `${notification.message}`,
        description: notification.description,
        placement: 'bottomRight',
      });
    }
  }, [notification]);

  return {
    api,
    contextHolder,
  };
};

export { useNotification };
