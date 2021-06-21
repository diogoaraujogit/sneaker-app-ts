import { toast } from 'react-toastify';

export const addPanelListener = (): void => {
  (window as any).PayWithMyBank.addPanelListener((command: any, event: any) => {
    if (command === 'event' && event.type === 'new_location') {
      if (event.data.indexOf('#success') === 0) {
        toast.success('success!');
      } else {
        toast.error('cancel!');
      }
      return false;
    }
  });
};
