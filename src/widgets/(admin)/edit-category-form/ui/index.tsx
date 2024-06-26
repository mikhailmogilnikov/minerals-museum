'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useEffect, useState } from 'react';
import { PiFloppyDiskBold, PiTrashBold } from 'react-icons/pi';
import { ButtonWithConfirm } from '@/features/button-with-confirm';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { InputDescription } from '@/shared/ui/(inputs)/description';
import { InputSingleSelect } from '@/shared/ui/(inputs)/single-select';
import { InputTitle } from '@/shared/ui/(inputs)/title';

type Props = {
  categoryId: string;
};

export const EditCategoryForm = ({ categoryId }: Props) => {
  const router = useRouter();
  const groups = useGroups();
  const categories = useCategories();

  const selectedCategory = categories.find(
    ({ id }) => id === Number(categoryId),
  );

  const [title, setTitle] = useState(selectedCategory?.name || '');
  const [description, setDescription] = useState(
    selectedCategory?.description || '',
  );
  const [group, setGroup] = useState<number | null>(
    selectedCategory?.group ?? null,
  );

  useEffect(() => {
    if (selectedCategory) {
      setGroup(selectedCategory.group ?? null);
    }
  }, [selectedCategory]);

  const handleChangeGroup = (id: number) => {
    setGroup(id);
  };

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
      <InputDescription value={description} setValue={setDescription} />
      <InputSingleSelect
        title='Группа'
        selectedItem={group}
        collection={groups}
        onSelectionChange={handleChangeGroup}
        placeholder='Поиск по группам'
      />

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
          description={`Вы действительно хотите удалить категорию "${selectedCategory?.name || 'Без названия'}"? Она пропадет из списка категорий у всех экспонатов, к которым относилась.`}
          confirmColor='danger'
          confirmTitle='Удалить'
          actionFn={handleDelete}
        >
          Удалить категорию
        </ButtonWithConfirm>
      </div>
    </form>
  );
};
