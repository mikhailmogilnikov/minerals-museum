'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { PiFloppyDiskBold, PiTrashBold } from 'react-icons/pi';
import { ButtonWithConfirm } from '@/features/button-with-confirm';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { InputTitle } from '@/shared/ui/(inputs)/title';

type Props = {
  groupId: string;
};

export const EditGroupForm = ({ groupId }: Props) => {
  const router = useRouter();
  const groups = useGroups();

  const selectedCategory = groups.find(({ id }) => id === Number(groupId));

  const [title, setTitle] = useState(selectedCategory?.name || '');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push('/admin/edit-categories');
  };

  const handleDelete = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full lg:w-1/2 flex flex-col gap-16'
    >
      <InputTitle value={title} setValue={setTitle} />

      <div className='w-full flex flex-col md:flex-row gap-4'>
        <Button
          type='submit'
          radius='full'
          size='lg'
          color='primary'
          className='font-medium md:w-fit'
        >
          <PiFloppyDiskBold size={18} />
          Сохранить изменения
        </Button>
        <ButtonWithConfirm
          icon={<PiTrashBold size={18} className='flex-shrink-0' />}
          className='md:w-fit text-danger'
          radius='full'
          description={`Вы действительно хотите удалить группу "${selectedCategory?.name || 'Без названия'}"? Все категории, относящиеся к ней переместятся в раздел "Без группы".`}
          confirmColor='danger'
          confirmTitle='Удалить'
          actionFn={handleDelete}
        >
          Удалить группу
        </ButtonWithConfirm>
      </div>
    </form>
  );
};
