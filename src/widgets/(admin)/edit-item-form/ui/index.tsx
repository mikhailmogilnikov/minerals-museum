'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { PiFloppyDiskBold, PiTrashBold } from 'react-icons/pi';
import { ButtonWithConfirm } from '@/features/button-with-confirm';
import { useItems } from '@/shared/lib/providers/items-provider';
import { SpecType } from '@/shared/model/mineral.type';
import { CardPreview } from '@/shared/ui/(inputs)/card-preview';
import { InputCategories } from '@/shared/ui/(inputs)/categories';
import { InputCharacterisics } from '@/shared/ui/(inputs)/characteristics';
import { InputDescription } from '@/shared/ui/(inputs)/description';
import { InputThreeModel } from '@/shared/ui/(inputs)/three-model';
import { InputTitle } from '@/shared/ui/(inputs)/title';

type Props = {
  itemId: string;
};

export const EditItemForm = ({ itemId }: Props) => {
  const items = useItems();
  const router = useRouter();

  const currentItem = items.find(({ id }) => id === Number(itemId));

  const [title, setTitle] = useState(currentItem?.name || '');
  const [description, setDescription] = useState(
    currentItem?.description || '',
  );
  const [characteristics, setCharacteristics] = useState<SpecType[]>(
    currentItem?.specs || [],
  );
  const [categories, setCategories] = useState<number[]>(
    currentItem?.categories || [],
  );
  const [model, setModel] = useState<File | string>(currentItem?.model || '');
  const [image, setImage] = useState<File | string>(currentItem?.img || '');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push('/admin');
  };

  const handleDelete = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full lg:w-1/2 flex flex-col gap-16'
    >
      <InputTitle value={title} setValue={setTitle} />
      <InputThreeModel
        model={model}
        setModel={setModel}
        image={image}
        setImage={setImage}
      />
      {image && <CardPreview title={title} image={image} />}
      <InputDescription value={description} setValue={setDescription} />
      <InputCharacterisics
        value={characteristics}
        setValue={setCharacteristics}
      />
      <InputCategories value={categories} setValue={setCategories} />
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
          description={`Вы действительно хотите удалить экспонат "${currentItem?.name || 'Без названия'}"? Он так же пропадет из списка всех категорий, к которым относился.`}
          confirmColor='danger'
          confirmTitle='Удалить'
          actionFn={handleDelete}
        >
          Удалить экспонат
        </ButtonWithConfirm>
      </div>
    </form>
  );
};
