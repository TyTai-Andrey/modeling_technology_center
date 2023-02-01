import { Store, NOTIFICATION_TYPE } from 'react-notifications-component';

export const serverError = (
  error?: string,
  message?: string,
  type?: NOTIFICATION_TYPE,
) => {
  Store.addNotification({
    title: error || 'Ошибка выполнения запроса к серверу!',
    message: message || 'Обновите страницу или попробуйте позже',
    type: type || 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate', 'fadeIn'],
    animationOut: ['animate', 'fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
