import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { MgriLogo } from '@/shared/assets/MgriLogo';
import { useTranslation } from '@/shared/i18n';
import { HomeRoutes } from '../config/home-routes';

type Props = {
  lng: string;
  children: ReactNode;
};

const DynamicTabs = dynamic(() =>
  import('@/shared/ui/tabs').then((mod) => mod.Tabs),
);

export const HomePage = async ({ lng, children }: Props) => {
  const { t } = await useTranslation(lng);

  return (
    <main className='w-full min-h-screen flex flex-col gap-6 md:gap-10 p-4 sm:p-6 xl:p-24 !pb-32 overflow-hidden'>
      <div className='w-full flex justify-between items-center gap-4 max-lg:pt-6'>
        <h1 className='text-[24px] sm:text-[30px] xl:text-[60px] font-bold'>
          {t('title')}
        </h1>
        <MgriLogo size={60} />
      </div>

      <div className='w-[calc(100%+32px)] sm:w-[calc(100%+48px)] h-fit -ml-4 px-4 sm:-ml-6 sm:px-6 overflow-y-scroll scrollbar-hide'>
        <DynamicTabs items={HomeRoutes} />
      </div>

      {children}
    </main>
  );
};
