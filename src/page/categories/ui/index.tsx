import Link from 'next/link';
import { PiCaretRightBold } from 'react-icons/pi';
import { Categories, MineralsData } from '@/shared/api/minerals-data';
import { useTranslation } from '@/shared/i18n';

type Props = {
  lng: string;
};

export const CategoriesPage = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng);
  const sortedCollection = Categories.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <ul className='w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6'>
      {sortedCollection.map(({ id, name }) => {
        const collection = MineralsData.filter(({ categories }) =>
          categories.includes(Number(id)),
        );

        return collection.length > 0 && (
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
        );
      })}
    </ul>
  );
};
