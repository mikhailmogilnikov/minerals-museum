/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useMedia } from 'react-use';
import { useCategoriesContext } from '@/shared/lib/providers/categories-provider';
import { CategoriesListDesktop } from './categories-list-desktop';
import { CategoriesListMobile } from './categories-list-mobile';

export const CategoriesList = () => {
  const isMobile = useMedia('(max-width: 767px)', false);
  const list = useCategoriesContext();

  return isMobile ? (
    <CategoriesListMobile categoriesList={list} />
  ) : (
    <CategoriesListDesktop categoriesList={list} />
  );
};
