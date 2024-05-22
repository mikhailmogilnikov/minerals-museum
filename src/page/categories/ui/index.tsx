'use client';

import Link from 'next/link';
import { PiCaretRightBold } from 'react-icons/pi';
import { useClientTranslation } from '@/shared/i18n/use-client-translation';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useItems } from '@/shared/lib/providers/items-provider';

type Props = {
  lng: string;
};

export const CategoriesPage = ({ lng }: Props) => {
  const { t } = useClientTranslation(lng);
  const categories = useCategories();
  const items = useItems();

  const sortedCollection = categories.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <ul className='w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6'>
      {sortedCollection.map(({ id, name }) => {
        const collection = items.filter(
          ({ categories: collectionCategories }) =>
            collectionCategories.includes(Number(id)),
        );

        return (
          collection.length > 0 && (
            <Link key={id} href={`/category/${id}`}>
              <li className='w-full h-20 bg-default shadow-base p-4 rounded-[20px] hover:scale-[1.02] hover:shadow-hover active:scale-[0.98] active:shadow-none transition-all'>
                <div className='w-full flex justify-between items-center'>
                  <div className='flex flex-col h-full justify-between'>
                    <h4 className='font-semibold'>{name}</h4>
                    <p className='opacity-50'>
                      {t('exhibits.t', { count: collection.length })}
                    </p>
                  </div>
                  <PiCaretRightBold size={24} className='opacity-50' />
                </div>
              </li>
            </Link>
          )
        );
      })}
    </ul>
  );
};
