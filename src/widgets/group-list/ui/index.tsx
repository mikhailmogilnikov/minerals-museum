import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PiPencilSimpleBold } from 'react-icons/pi';
import { CarouselCategory } from '@/entities/carousel';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useItems } from '@/shared/lib/providers/items-provider';
import { GroupType } from '@/shared/model/mineral.type';

type Props = {
  group: GroupType;
  isEditable?: boolean;
  hideEmpty?: boolean;
  href?: string;
};

export const GroupList = ({
  group,
  isEditable = false,
  hideEmpty = false,
  href,
}: Props) => {
  const categories = useCategories();
  const items = useItems();
  const { id, name } = group;

  const collection = categories.filter(
    ({ group: collGroup }) => id === collGroup,
  );

  const filteredCollection = hideEmpty
    ? collection.filter((cat) =>
        items.some(({ categories: currCats }) => currCats.includes(cat.id)),
      )
    : collection;

  const sortedCollection = filteredCollection.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div
      key={id}
      className='w-full flex flex-col gap-4 -ml-4 sm:-ml-6 xl:-ml-24'
    >
      <div className='w-full flex gap-4 items-center'>
        <h5 className='text-2xl lg:text-4xl font-semibold pl-4 sm:pl-6 xl:pl-24'>
          {name}
        </h5>
        {isEditable && (
          <Button
            as={Link}
            href={`/admin/edit/group/${id}`}
            size='sm'
            radius='full'
            isIconOnly
            className='shadow-base flex-shrink-0'
          >
            <PiPencilSimpleBold size={18} />
          </Button>
        )}
      </div>

      {sortedCollection.length > 0 ? (
        <CarouselCategory
          collection={sortedCollection}
          className='category'
          href={href}
        />
      ) : (
        <div className='w-full max-w-96 rounded-2xl shadow-base flex flex-row gap-2 bg-default ml-4 sm:ml-6 xl:ml-24 p-4 mt-4'>
          <p className='font-medium opacity-70'>
            В этой группе отсутствуют категории.
          </p>
        </div>
      )}
    </div>
  );
};
