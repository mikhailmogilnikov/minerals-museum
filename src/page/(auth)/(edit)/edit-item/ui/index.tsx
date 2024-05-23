import { EditItemForm } from '@/widgets/(admin)/edit-item-form';

type Props = { itemId: string };

export const EditItemPage = ({ itemId }: Props) => {
  return (
    <main className='w-full min-h-screen flex flex-col gap-6 md:gap-10 p-4 sm:p-6 xl:p-24 !pb-32 overflow-hidden'>
      <div className='w-full flex justify-between items-center pt-16 xl:pt-0'>
        <h1 className='text-[24px] sm:text-[30px] xl:text-[60px] font-bold'>
          Редактирование экспоната
        </h1>
      </div>
      <EditItemForm itemId={itemId} />
    </main>
  );
};
