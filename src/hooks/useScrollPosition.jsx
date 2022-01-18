import { useState, useCallback } from 'react';
import useEventListener from './useEventListener';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handler = useCallback(
    () => {
      // Update scrollPosition
      setScrollPosition(window.pageYOffset);
    },
    [setScrollPosition]
  );

  useEventListener("scroll", handler);

  return {
    scrollPosition,
  };
};

export default useScrollPosition;