'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { InputDescription } from '@/shared/ui/(inputs)/description';
import { InputSingleSelect } from '@/shared/ui/(inputs)/single-select';
import { InputTitle } from '@/shared/ui/(inputs)/title';

export const NewCategoryForm = () => {
  const router = useRouter();
  const groups = useGroups();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [group, setGroup] = useState<number | null>(null);

  const handleChangeGroup = (id: number) => {
    setGroup(id);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push('/admin/edit-categories');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full lg:w-1/2 flex flex-col gap-16'
    >
      <InputTitle value={title} setValue={setTitle} />
      <InputDescription value={description} setValue={setDescription} />
      <InputSingleSelect
        title='Группа'
        selectedItem={group}
        collection={groups}
        onSelectionChange={handleChangeGroup}
        placeholder='Поиск по группам'
      />

      <Button
        type='submit'
        radius='full'
        size='lg'
        color='primary'
        className='font-medium md:w-fit'
      >
        <PiPlusBold size={18} />
        Создать категорию
      </Button>
    </form>
  );
};
