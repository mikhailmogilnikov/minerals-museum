'use client';

import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  children: ReactNode;
};

export const ClosableNotification = ({ icon, children }: Props) => {
  return (
    <div className='bg-default text-default-600 p-4 rounded-2xl shadow-base flex gap-4 items-center w-full max-w-[420px]'>
      {icon}
      <p className='text-sm font-medium'>{children}</p>
    </div>
  );
};
