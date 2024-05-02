/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { Button } from '@nextui-org/button';
import { PiShuffleBold } from 'react-icons/pi';
import { useLocalStorage, useMedia } from 'react-use';
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

  const handleToggleRandom = () => {
    setIsRandomCategories(!isRandomCategories);
  };

  return (
    <>
      <Button
        
        onPress={handleToggleRandom}
        size='md'
        color={isRandomCategories ? 'primary' : 'default'}
        className='w-min rounded-2xl font-medium -mb-2'
      >
        <PiShuffleBold size={20} />
        Перемешивание
        <InfoButton>
          При каждой перезагрузке сайта категории на главной странице будут
          распределены случайным образом.
        </InfoButton>
      </Button>

      {isMobile ? (
        <CategoriesListMobile categoriesList={list} />
      ) : (
        <CategoriesListDesktop categoriesList={list} />
      )}
    </>
  );
};
