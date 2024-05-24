'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { PiFloppyDiskBold, PiTrashBold } from 'react-icons/pi';
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
        <Button
          radius='full'
          size='lg'
          className='font-medium md:w-fit text-danger'
        >
          <PiTrashBold size={18} />
          Удалить экспонат
        </Button>
      </div>
    </form>
  );
};
