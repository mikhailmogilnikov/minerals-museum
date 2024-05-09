import { ModalBody, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import { PiTrashBold } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';

type Props = {
  onClose: () => void;
};

export const DeleteModalContent = ({ onClose }: Props) => {
  const [, , deleteItems] = useLocalStorage('visited-items', []);
  const [, , deleteExploreItems] = useLocalStorage('explore-viewed-items', []);

  const handleClickDelete = () => {
    deleteItems();
    deleteExploreItems();
    window.location.reload();
  };

  return (
    <>
      <ModalHeader className='flex flex-col gap-1 pt-6'>
        Подтвердите действие
      </ModalHeader>
      <ModalBody>
        <p className='opacity-50 font-medium'>
          Вы собираетесь удалить всю историю просмотров. Это действие
          распространится на изученные экспонаты и просмотренные карточки в
          режиме исследования. Продолжить?
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
