'use client'

import { useState, useEffect } from 'react';

type DeviceType = 'mob' | 'tab' | 'desktop';

const useDevice = () => {
  // Initialize with desktop or based on window if it exists (for SSR safety if needed)
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice('mob');
      } else if (width < 1024) {
        setDevice('tab');
      } else {
        setDevice('desktop');
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    device,
    isMob: device === 'mob',
    isTab: device === 'tab',
    isDesktop: device === 'desktop',
  };
};

export default useDevice;
