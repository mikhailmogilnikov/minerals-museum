import { useTranslation } from '@/shared/i18n';

type Props = {
  lng: string;
};

export const HomePage = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng);

  return (
    <main className='w-full min-h-screen p-4 sm:p-6 md:p-12 lg:p-24'>
      <h1 className='text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold'>
        {t('title')}
      </h1>
    </main>
  );
};
