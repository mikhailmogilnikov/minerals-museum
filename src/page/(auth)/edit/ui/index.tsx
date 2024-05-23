import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';
import { AdminRoutes } from '../config/routes';

const DynamicTabs = dynamic(() =>
  import('@/shared/ui/tabs').then((mod) => mod.Tabs),
);

export const EditPage = ({ children }: PropsWithChildren) => {
  return (
    <main className='w-full min-h-screen flex flex-col gap-6 md:gap-10 p-4 sm:p-6 xl:p-24 !pb-32 overflow-hidden'>
      <div className='w-full flex justify-between items-center pt-16 xl:pt-0'>
        <h1 className='text-[24px] sm:text-[30px] xl:text-[60px] font-bold'>
          Режим редактирования
        </h1>
      </div>

      <div className='w-[calc(100%+32px)] sm:w-[calc(100%+48px)] h-fit -ml-4 px-4 sm:-ml-6 sm:px-6 overflow-y-scroll scrollbar-hide'>
        <DynamicTabs items={AdminRoutes} />
      </div>

      {children}
    </main>
  );
};
