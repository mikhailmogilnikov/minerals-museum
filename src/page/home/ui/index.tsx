import dynamic from 'next/dynamic';
import { MgriLogo } from '@/shared/assets/MgriLogo';
import { useTranslation } from '@/shared/i18n';

type Props = {
  lng: string;
};

const DynamicCategoriesList = dynamic(() =>
  import('./categories-list').then((mod) => mod.CategoriesList),
);

export const HomePage = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng);

  return (
    <main className='w-full min-h-screen flex flex-col gap-12 p-4 sm:p-6 md:p-12 lg:p-24 !pb-32'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold'>
          {t('title')}
        </h1>
        <MgriLogo size={60} />
      </div>

      <DynamicCategoriesList />
    </main>
  );
};
