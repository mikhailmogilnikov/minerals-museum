/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PiMagnifyingGlassBold, PiShuffleBold } from 'react-icons/pi';
import { useLocalStorage, useMedia } from 'react-use';
import { MineralsData } from '@/shared/api/minerals-data';
import { useCategoriesContext } from '@/shared/lib/providers/categories-provider';
import { InfoButton } from '@/shared/ui/info-button';
import { CategoriesListDesktop } from './categories-list-desktop';
import { CategoriesListMobile } from './categories-list-mobile';

export const SelectionPage = () => {
  const isMobile = useMedia('(max-width: 767px)', false);
  const [isRandomCategories, setIsRandomCategories] = useLocalStorage<boolean>(
    'random-categories',
    false,
  );
  const list = useCategoriesContext();

  const sortedList = list.filter((category) => {
    const collection = MineralsData.filter(({ categories }) =>
      categories.includes(category.id),
    );

    return collection.length > 3;
  });

  const handleToggleRandom = () => {
    setIsRandomCategories(!isRandomCategories);
  };

  return (
    <>
      <Button
        onPress={handleToggleRandom}
        size='md'
        color={isRandomCategories ? 'primary' : 'default'}
        className='w-min rounded-2xl font-medium -mb-2 shadow-base'
      >
        <PiShuffleBold size={20} />
        Перемешивание
        <InfoButton>
          При каждой перезагрузке сайта категории на главной странице будут
          распределены случайным образом.
        </InfoButton>
      </Button>

      {isMobile ? (
        <CategoriesListMobile categoriesList={sortedList} />
      ) : (
        <CategoriesListDesktop categoriesList={sortedList} />
      )}

      <div className='flex flex-col gap-4 mt-10'>
        <p className='text-lg font-medium opacity-50'>
          Не нашли то что искали?
        </p>
        <div className='flex gap-4 flex-wrap'>
          <Button
            as={Link}
            href='/exhibits'
            className='shadow-base font-medium'
          >
            Посмотреть все экспонаты
          </Button>
          <Button
            as={Link}
            href='/categories'
            className='shadow-base font-medium'
          >
            Изучить все категории
          </Button>
        </div>
        <p className='font-medium mt-6'>
          <span className='opacity-50'>Или воспользуйтесь</span>{' '}
          <Button
            size='sm'
            radius='full'
            className='mx-2 text-md font-medium shadow-base'
          >
            <PiMagnifyingGlassBold />
            Поиском
          </Button>
          <span className='opacity-50'>по категориям и экспонатам</span>
        </p>
      </div>
    </>
  );
};
