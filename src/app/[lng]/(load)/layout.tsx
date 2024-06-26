'use client';

import { ReactNode } from 'react';
import { MgriLogo } from '@/shared/assets/MgriLogo';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { useItems } from '@/shared/lib/providers/items-provider';

export default function LoadLayout({ children }: { children: ReactNode }) {
  const items = useItems();
  const categories = useCategories();
  const groups = useGroups();

  if (items.length === 0 || categories.length === 0 || groups.length === 0)
    return (
      <div className='absolute top-0 left-0 w-dvw h-dvh z-50 bg-default flex items-center justify-center'>
        <MgriLogo className='animate-pulse mb-4' size={70} />
      </div>
    );

  return children;
}
