import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Categories } from '@/shared/api/minerals-data';

type Props = {
  categoryId: number;
};

export const Chip = ({ categoryId }: Props) => {
  const category = Categories.find(
    (currCategory) => currCategory.id === categoryId,
  );

  return (
    <Button
      href={`/category/${categoryId}`}
      as={Link}
      size='sm'
      radius='full'
      className='w-min text-sm font-medium shadow-base'
    >
      {category?.name}
    </Button>
  );
};
