import { MineralPage } from '@/page/mineral';

type Props = {
  params: { lng: string };
};

export default async function Mineral({ params: { lng } }: Props) {
  return <MineralPage lng={lng} />;
}
