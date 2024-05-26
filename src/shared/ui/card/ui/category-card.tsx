'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useClientTranslation } from '@/shared/i18n/use-client-translation';
import { useItems } from '@/shared/lib/providers/items-provider';

type Props = {
  id: number;
  name: string;
  href?: string;
};

export const CategoryCard = ({ id, name, href = '/category' }: Props) => {
  const router = useRouter();
  const { t } = useClientTranslation();
  const items = useItems();

  const collection = items.filter(({ categories: collectionCategories }) =>
    collectionCategories.includes(Number(id)),
  );

  return (
    <button
      type='button'
      onClick={() => router.push(`${href}/${id}`)}
      className='w-full h-full bg-default rounded-2xl shadow-base p-4 flex flex-col gap-3 relative overflow-clip text-start items-start hover:opacity-90 active:scale-[0.98] transition-transform-opacity'
    >
      <h6 className='text-md font-medium z-50 '>{name}</h6>
      <p className='opacity-50 z-50'>
        {t('exhibits.t', { count: collection.length })}
      </p>
      <div className='w-full absolute top-0 left-0 h-full bg-default/20 z-40' />

      {collection.length > 0 && (
        <div className='w-[80%] aspect-square absolute left-[10%] max-sm:-bottom-[10%] -bottom-[4%] z-20'>
          <Image
            src={collection[0].img}
            fill
            alt={collection[0].name}
            className='-z-10'
          />
        </div>
      )}
      {collection.length > 1 && (
        <div className='w-[70%] aspect-square absolute left-[50%] max-sm:bottom-[5%] bottom-[15%]  z-10'>
          <Image src={collection[1].img} fill alt={collection[1].name} />
        </div>
      )}
      {collection.length > 2 && (
        <div className='w-[70%] aspect-square absolute -left-[30%] max-sm:bottom-0 bottom-[10%] z-30'>
          <Image
            src={collection[2].img}
            fill
            alt={collection[2].name}
            className='snap-start flex-shrink-0 object-cover h-full z-10'
          />
        </div>
      )}
    </button>
  );
};
