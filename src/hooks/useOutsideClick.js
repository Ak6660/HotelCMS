import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listerCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.body.addEventListener(
      'click',
      handleOutsideClick,
      listerCapturing
    );
    return () =>
      document.body.removeEventListener(
        'click',
        handleOutsideClick,
        listerCapturing
      );
  }, [handler, listerCapturing]);
  return { ref };
}
