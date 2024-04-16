import { HomePage } from '@/page/home';

type Props = {
  params: { lng: string };
};

export default async function Home({ params: { lng } }: Props) {
  return <HomePage lng={lng} />;
}
