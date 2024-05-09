import { MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PiArrowCircleRightBold, PiCheckBold } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';
import { DraggableCard } from '@/entities/draggable-card';
import { MineralType } from '@/shared/model/mineral.type';

type Props = {
  x: MotionValue<number>;
  handleDragEnd: (_: any, info: any) => void;
  setIsClosable: (bool: boolean) => void;
  data: MineralType;
};

export const ExploreCard = ({
  x,
  handleDragEnd,
  setIsClosable,
  data,
}: Props) => {
  const [visitedItems] = useLocalStorage<number[]>('visited-items', []);
  const [viewedItemsIds] = useLocalStorage<number[]>(
    'explore-viewed-items',
    [],
  );
  const router = useRouter();
  const { id, name, img } = data;

  const isWatched = visitedItems?.includes(id);

  const handleDrag = (_: any, info: any) => {
    if (Math.abs(info.offset.x) >= 40) {
      setIsClosable(true);
    } else {
      setIsClosable(false);
    }
  };

  const handleClick = () => {
    if (x.get() === 0) {
      router.push(`/minerals/${id}`);
    }
  };

  return (
    <DraggableCard
      x={x}
      onClick={handleClick}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
    >
      {!isWatched && viewedItemsIds?.includes(id) && (
        <div className='absolute bg-default shadow-base -right-4 -top-2 z-10 px-3 py-1 rounded-full flex gap-2 items-center font-medium'>
          <PiArrowCircleRightBold />
          Пропущенно
        </div>
      )}

      {isWatched && (
        <div className='absolute bg-success text-white -right-4 -top-2 z-10 px-3 py-1 rounded-full flex gap-2 items-center font-medium shadow-lg shadow-success/30'>
          <PiCheckBold />
          Просмотрено
        </div>
      )}

      <div className='w-full h-full bg-[--element] shadow-base rounded-2xl flex-shrink-0 flex flex-col relative transition-all justify-end'>
        <Image
          draggable={false}
          alt={name}
          src={img}
          width={200}
          height={200}
          className='w-full aspect-square absolute top-0'
        />
        <div className='w-full p-4'>
          <h5 className='text-lg font-medium'>{name}</h5>
        </div>
      </div>
    </DraggableCard>
  );
};
