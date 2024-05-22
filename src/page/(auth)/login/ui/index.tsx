'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

export const LoginPage = () => {
  const [, setCookie] = useCookies();
  const router = useRouter();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setCookie('token', login);
    router.refresh();
  };

  return (
    <div className='w-full h-dvh flex items-center justify-center px-4'>
      <div className='w-full max-w-96 flex flex-col gap-6'>
        <h1 className='text-2xl font-semibold'>Вход в аккаунт</h1>
        <Input
          size='lg'
          type='name'
          placeholder='Логин'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          size='lg'
          type='password'
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          size='lg'
          color='primary'
          className='font-medium'
          onPress={handleSubmit}
        >
          Войти
        </Button>
      </div>
    </div>
  );
};
