/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable react-hooks/exhaustive-deps */

import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { Button } from '@nextui-org/button';
import { Key, memo, useEffect, useState } from 'react';
import { PiXBold } from 'react-icons/pi';
import { useCategories } from '@/shared/lib/providers/categories-provider';

type Props = {
  value: number[];
  setValue: (value: number[]) => void;
};

export const InputCategories = memo(({ value, setValue }: Props) => {
  const categories = useCategories();
  const [selectableCategories, setSelectableCategories] = useState(
    categories || [],
  );

  useEffect(() => {
    if (selectableCategories.length === 0) setSelectableCategories(categories);
  }, [categories]);

  const handleSelect = (currentId: Key) => {
    const newCategories = categories.filter(
      ({ id }) => !value.includes(id) && id !== Number(currentId),
    );

    setSelectableCategories(newCategories || []);
    setValue([...value, Number(currentId)]);
  };

  const handleDelete = (currentId: number) => {
    const newCollection = value.filter((id) => id !== currentId);
    const newCategories = categories.filter(
      ({ id }) => !newCollection.includes(id) || id === Number(currentId),
    );
    setSelectableCategories(newCategories || []);
    setValue(newCollection);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <p className='font-medium opacity-50'>Категории</p>
      <Autocomplete
        size='lg'
        placeholder='Начните ввод для поиска по категориям'
        selectedKey={null}
        aria-label='Выберите категории'
        defaultItems={selectableCategories}
        onSelectionChange={handleSelect}
        inputProps={{
          classNames: {
            inputWrapper: '!bg-default',
          },
        }}
        listboxProps={{}}
      >
        {(item) => (
          <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
        )}
      </Autocomplete>

      {value.length > 0 && (
        <div className='w-full flex gap-3 items-center flex-wrap mt-2'>
          {value.map((valueId) => {
            const currentCategory = categories.find(
              ({ id }) => id === Number(valueId),
            );

            return (
              currentCategory && (
                <Button
                  key={currentCategory.id}
                  size='sm'
                  onPress={() => handleDelete(currentCategory.id)}
                  id={currentCategory.id.toString()}
                  radius='full'
                  className='shadow-base font-medium h-8 min-w-4 text-md'
                >
                  {currentCategory.name} <PiXBold />
                </Button>
              )
            );
          })}
        </div>
      )}
    </div>
  );
});
