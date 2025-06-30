'use client';

import { useEffect } from 'react';

export default function KeepAliveComponent() {
  useEffect(() => {
    // Hanya jalankan di production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const keepAlive = async () => {
      try {
        const response = await fetch('/api/keep-alive', {
          method: 'GET',
          cache: 'no-cache'
        });
        
        const result = await response.json();
        console.log('Keep-alive response:', result);
      } catch (error) {
        console.error('Keep-alive request failed:', error);
      }
    };

    // Ping segera setelah component mount
    keepAlive();

    // Set interval untuk ping setiap 4 jam
    const intervalId = setInterval(keepAlive, 4 * 60 * 60 * 1000);

    // Cleanup interval saat component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Component ini tidak merender apa-apa
  return null;
}
