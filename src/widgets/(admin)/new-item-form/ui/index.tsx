'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { SpecType } from '@/shared/model/mineral.type';
import { CardPreview } from '@/shared/ui/(inputs)/card-preview';
import { InputCategories } from '@/shared/ui/(inputs)/categories';
import { InputCharacterisics } from '@/shared/ui/(inputs)/characteristics';
import { InputDescription } from '@/shared/ui/(inputs)/description';
import { InputThreeModel } from '@/shared/ui/(inputs)/three-model';
import { InputTitle } from '@/shared/ui/(inputs)/title';

export const NewItemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [characteristics, setCharacteristics] = useState<SpecType[]>([]);
  const [categories, setCategories] = useState<number[]>([]);
  const [model, setModel] = useState<File>();
  const [image, setImage] = useState<File>();

  const handleSubmit = () => {};

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
      <Button
        type='submit'
        radius='full'
        size='lg'
        color='primary'
        className='font-medium md:w-fit'
      >
        <PiPlusBold size={18} />
        Создать экспонат
      </Button>
    </form>
  );
};
