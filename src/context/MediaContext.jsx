import { createContext, useEffect, useState } from 'react';

const MediaContext = createContext();

export function MediaContextProvider({ children }) {
  const [mediaQuery, setMediaQuery] = useState('dekstop');
  useEffect(() => {
    document.onresize(() => {
      console.log('resize');
    });
  }, []);
  return (
    <MediaContext.Provider>
      {children}
    </MediaContext.Provider>
  );
}
