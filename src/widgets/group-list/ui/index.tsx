import { CarouselCategory } from '@/entities/carousel';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { GroupType } from '@/shared/model/mineral.type';

type Props = {
  group: GroupType;
};

export const GroupList = ({ group }: Props) => {
  const categories = useCategories();

  const { id, name } = group;

  const collection = categories.filter(
    ({ group: collGroup }) => id === collGroup,
  );

  const sortedCollection = collection.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div
      key={id}
      className='w-full flex flex-col gap-4 -ml-4 sm:-ml-6 xl:-ml-24'
    >
      <h5 className='text-2xl lg:text-4xl font-semibold pl-4 sm:pl-6 xl:pl-24'>
        {name}
      </h5>
      {sortedCollection.length > 0 ? (
        <CarouselCategory collection={sortedCollection} className='category' />
      ) : (
        <div className='w-full max-w-96 rounded-2xl shadow-base flex flex-row gap-2 bg-default ml-4 sm:ml-6 xl:ml-24 p-4 mt-4'>
          <p className='font-medium opacity-70'>
            В этой группе отсутсвуют категории.
          </p>
        </div>
      )}
    </div>
  );
};
