import { useEffect, useState } from 'react';

import { Viewport } from 'styled-components';

const DEFAULT_VIEWPORT: Viewport = {
  height: '100vh',
  width: '100vw',
};

export const useViewport = () => {
  const [viewport, setViewport] = useState<Viewport>(DEFAULT_VIEWPORT);

  const resizeListener = () => {
    setViewport({
      height: `${window?.innerHeight ?? 0}px`,
      width: `${window?.innerWidth ?? 0}px`,
    });
  };

  useEffect(() => {
    resizeListener();
    window.addEventListener('resize', resizeListener);
  }, []);

  return viewport;
};
