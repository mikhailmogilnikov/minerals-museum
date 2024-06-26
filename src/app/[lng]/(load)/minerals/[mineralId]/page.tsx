import { MineralPage } from '@/page/mineral';

type Props = {
  params: { mineralId: string };
};

export default function Mineral({ params: { mineralId } }: Props) {
  return <MineralPage mineralId={mineralId} />;
}
