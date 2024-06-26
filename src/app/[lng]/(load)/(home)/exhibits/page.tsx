import { Spinner } from '@nextui-org/spinner';
import dynamic from 'next/dynamic';

const DynamicExhibitsPage = dynamic(
  () => import('@/page/exhibits').then((mod) => mod.ExhibitsPage),
  {
    ssr: false,
    loading: () => (
      <div className='absolute h-dvh top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
        <Spinner />
      </div>
    ),
  },
);

export default function Exhibits() {
  return <DynamicExhibitsPage />;
}
