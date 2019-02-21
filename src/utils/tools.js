import { Message } from 'element-ui';

export const notify = ({
  type = 'info',
  message = '',
  duration = 2000,
  showClose = false,
  onClose = () => {},
}) => {
  Message({
    type,
    message,
    duration,
    showClose,
    onClose,
  });
};

export const closeNotify = () => {
  Message.close();
};

export function debounce(func, wait = 1000, immediate = true) {
  let timeout;
  let result;
  return (...args) => {
    const context = this;
    if (timeout) window.clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = false;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
}

export const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;
