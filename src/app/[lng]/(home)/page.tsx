import { Spinner } from '@nextui-org/spinner';
import dynamic from 'next/dynamic';

type Props = {
  params: { lng: string };
};

const DynamicSelectionPage = dynamic(
  () => import('@/page/selection').then((mod) => mod.SelectionPage),
  {
    ssr: false,
    loading: () => (
      <div className='w-full flex justify-center items-center h-[60vh]'>
        <Spinner />
      </div>
    ),
  },
);

export default async function Home({ params: { lng } }: Props) {
  return <DynamicSelectionPage />;
}
