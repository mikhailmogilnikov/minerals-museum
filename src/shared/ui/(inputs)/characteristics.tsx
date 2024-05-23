import { Input } from '@nextui-org/input';
import { ChangeEventHandler, memo, useState } from 'react';
import { SpecType } from '@/shared/model/mineral.type';

type Props = {
  value: SpecType[];
  setValue: (value: SpecType[]) => void;
};

export const InputCharacterisics = memo(({ value, setValue }: Props) => {
  const [counter, setCounter] = useState(0);

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id: titleId, value: targetValue } = e.target;

    const id = titleId.split('_')[0];

    const currentChar = value.find(
      ({ id: currentId }) => currentId?.toString() === id,
    );
    const index = value.indexOf(currentChar as SpecType);
    const newArray = value.filter(
      ({ id: currentId }) => currentId?.toString() !== id,
    );

    if (targetValue.length > 0 || (currentChar?.content || '').length > 0) {
      newArray.splice(index, 0, {
        id: currentChar?.id || 0,
        title: targetValue,
        content: currentChar?.content || '',
      });
    }

    setValue(newArray);
  };

  const handleChangeContent: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value: targetValue } = e.target;

    const titleId = id.split('_')[0];

    const currentChar = value.find(
      ({ id: currentId }) => currentId?.toString() === titleId,
    );

    const index = value.indexOf(currentChar as SpecType);

    const newArray = value.filter(
      ({ id: currentId }) => currentId?.toString() !== titleId,
    );

    if (targetValue.length > 0 || (currentChar?.title || '').length > 0) {
      newArray.splice(index, 0, {
        id: currentChar?.id || 0,
        title: currentChar?.title || '',
        content: targetValue,
      });
    }

    setValue(newArray);
  };

  const handleCreate: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: inputValue } = e.target;

    setValue([...value, { id: counter, title: inputValue, content: '' }]);
    setCounter(counter + 1);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <p className='font-medium opacity-50'>Характеристики</p>
      {value.map(({ id, title, content }) => (
        <div key={id} className='w-full flex gap-2 items-center'>
          <Input
            id={`${id}_${title}`}
            autoFocus
            size='lg'
            placeholder='Заголовок'
            value={title}
            onChange={handleChangeTitle}
            classNames={{
              inputWrapper: '!bg-default',
              base: 'w-2/5 flex-shrink-0',
            }}
          />
          :
          <Input
            id={`${id}_${content}`}
            size='lg'
            value={content}
            onChange={handleChangeContent}
            placeholder='Значение'
            classNames={{ inputWrapper: '!bg-default' }}
          />
        </div>
      ))}
      <div className='w-full flex gap-2 items-center'>
        <Input
          size='lg'
          placeholder='Заголовок'
          onChange={handleCreate}
          value=''
          classNames={{
            inputWrapper: '!bg-default',
            base: 'w-2/5 flex-shrink-0',
          }}
        />
        :
        <Input
          isDisabled
          size='lg'
          placeholder='Значение'
          classNames={{ inputWrapper: '!bg-default' }}
        />
      </div>
    </div>
  );
});
