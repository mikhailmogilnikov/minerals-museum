'use client';

import { m } from 'framer-motion';
import { ReactNode } from 'react';

export const Fader = ({ children }: { children: ReactNode }) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ease: [0, 1, 0, 1], duration: 0.6 }}
      className='origin-bottom'
    >
      {children}
    </m.div>
  );
};
