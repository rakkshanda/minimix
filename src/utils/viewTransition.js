import { flushSync } from 'react-dom';

export const withViewTransition = (callback) => {
  if (typeof document !== 'undefined' && document.startViewTransition) {
    document.startViewTransition(() => {
      flushSync(() => {
        callback();
      });
    });
    return;
  }

  callback();
};

export const navigateWithTransition = (navigate, to, options) => {
  withViewTransition(() => {
    if (typeof to === 'number') {
      navigate(to);
      return;
    }

    navigate(to, options);
  });
};
