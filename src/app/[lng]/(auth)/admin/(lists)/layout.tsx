import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { EditPage } from '@/page/(auth)/edit';

export default function AuthLayout({ children }: PropsWithChildren) {
  const token = getCookie('token', { cookies });

  if (!token) {
    permanentRedirect('/login');
  }

  return <EditPage>{children}</EditPage>;
}
