import { MineralType } from '@/shared/model/mineral.type';
import { Card } from '@/shared/ui/card';

type Props = {
  list: MineralType[];
};

export const MineralsList = ({ list }: Props) => {
  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
      {list.map(({ name, id, img }) => (
        <div key={id} className='w-full aspect-[4/5]'>
          <Card title={name} img={img} path={`/minerals/${id}`} />
        </div>
      ))}
    </div>
  );
};
