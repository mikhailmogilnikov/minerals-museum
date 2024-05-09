import { ModalBody, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import { PiTrashBold } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';

type Props = {
  onClose: () => void;
};

export const DeleteModalContent = ({ onClose }: Props) => {
  const [__, _, deleteItems] = useLocalStorage('explore-viewed-items', []);

  const handleClickDelete = () => {
    deleteItems();
    window.location.reload();
  };

  return (
    <>
      <ModalHeader className='flex flex-col gap-1 pt-6'>
        Подтвердите действие
      </ModalHeader>
      <ModalBody>
        <p className='opacity-50 font-medium'>
          Вы собираетесь стереть историю просмотренных карточек в режиме
          исследования. Это действие не затронет историю просмотров экспонатов.
          Продолжить?
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color='default' onPress={onClose} className='shadow-base'>
          Отмена
        </Button>
        <Button
          color='danger'
          variant='shadow'
          onPress={handleClickDelete}
          startContent={<PiTrashBold />}
        >
          Стереть
        </Button>
      </ModalFooter>
    </>
  );
};
