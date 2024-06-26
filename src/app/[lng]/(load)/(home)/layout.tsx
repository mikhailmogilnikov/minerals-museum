import { ReactNode } from 'react';
import { HomePage } from '@/page/home';

type Props = {
  params: { lng: string };
  children: ReactNode;
};

export default async function HomeLayout({ params: { lng }, children }: Props) {
  return <HomePage lng={lng}>{children}</HomePage>;
}
