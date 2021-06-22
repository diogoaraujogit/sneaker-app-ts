import { toast } from 'react-toastify';

export const addPanelListener = (
  handleSuccess: () => void,
  handleError: () => void,
): void => {
  (window as any).PayWithMyBank.addPanelListener((command: any, event: any) => {
    if (command === 'event' && event.type === 'new_location') {
      if (event.data.indexOf('#success') === 0) {
        handleSuccess();
      } else {
        handleError();
      }
      return false;
    }
  });
};
