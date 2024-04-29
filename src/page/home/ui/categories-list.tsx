'use client';

import { useMedia } from 'react-use';
import { CategoriesListDesktop } from './categories-list-desktop';
import { CategoriesListMobile } from './categories-list-mobile';

export const CategoriesList = () => {
  const isMobile = useMedia('(max-width: 767px)', false);

  return isMobile ? <CategoriesListMobile /> : <CategoriesListDesktop />;
};
