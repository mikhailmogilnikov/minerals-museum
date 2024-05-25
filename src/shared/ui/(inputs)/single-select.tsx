import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { memo } from 'react';

type Props = {
  isRequired?: boolean;
  title: string;
  placeholder?: string;
  collection: any[];
  selectedItem: any;
  onSelectionChange: (value: any) => void;
};

export const InputSingleSelect = memo(
  ({
    isRequired = false,
    title,
    placeholder = '',
    collection,
    selectedItem,
    onSelectionChange,
  }: Props) => {
    return (
      <div className='w-full flex flex-col gap-4'>
        <div className='w-full flex gap-2 items-center'>
          <p className='font-medium opacity-50'>{title}</p>
          {isRequired && (
            <div className='w-2 h-2 rounded-full bg-danger shadow-2xl shadow-red-600 mt-[2px]' />
          )}
        </div>
        <Autocomplete
          size='lg'
          placeholder={placeholder}
          defaultSelectedKey={
            selectedItem !== null ? selectedItem.toString() : undefined
          }
          selectedKey={
            selectedItem !== null ? selectedItem.toString() : undefined
          }
          aria-label={placeholder}
          defaultItems={collection}
          onSelectionChange={onSelectionChange}
          inputProps={{
            classNames: {
              inputWrapper: '!bg-default',
            },
          }}
        >
          {(item) => (
            <AutocompleteItem aria-label={item.name} key={item.id}>
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
    );
  },
);
