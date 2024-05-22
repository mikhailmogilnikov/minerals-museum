import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useCategories } from '@/shared/lib/providers/categories-provider';

type Props = {
  categoryId: number;
  onPress?: () => void;
};

export const Chip = ({ categoryId, onPress }: Props) => {
  const categories = useCategories();

  const category = categories.find(
    (currCategory) => currCategory.id === categoryId,
  );

  return (
    <Button
      href={`/category/${categoryId}`}
      as={Link}
      size='sm'
      radius='full'
      onPress={onPress}
      className='w-min text-sm font-medium shadow-base first-letter:uppercase'
    >
      {category?.name}
    </Button>
  );
};
