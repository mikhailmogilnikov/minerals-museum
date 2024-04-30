import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';

const DynamicHistoryPage = dynamic(
  () => import('@/page/history').then((mod) => mod.HistoryPage),
  {
    ssr: false,
    loading: () => (
      <div className='absolute h-dvh top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
        <Spinner />
      </div>
    ),
  },
);

export default function History() {
  return <DynamicHistoryPage />;
}
