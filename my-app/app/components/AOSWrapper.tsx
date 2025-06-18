'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

const AOSWrapper = () => {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return null;
};

export default AOSWrapper;
