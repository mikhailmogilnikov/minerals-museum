import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function GuestLayout({ children }: PropsWithChildren) {
  const token = getCookie('token', { cookies });

  if (token) {
    permanentRedirect('/admin');
  }

  return children;
}
