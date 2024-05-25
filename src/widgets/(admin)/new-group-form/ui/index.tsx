'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { InputTitle } from '@/shared/ui/(inputs)/title';

export const NewGroupForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');

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

      <Button
        type='submit'
        radius='full'
        size='lg'
        color='primary'
        className='font-medium md:w-fit'
      >
        <PiPlusBold size={18} />
        Создать группу
      </Button>
    </form>
  );
};
