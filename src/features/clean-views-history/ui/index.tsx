import { Button } from '@nextui-org/button';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import { useLocalStorage } from 'react-use';
import { DeleteModalContent } from './modal';

export const CleanHistoryButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [visitedItems] = useLocalStorage<number[]>('visited-items', []);

  const items = visitedItems || [];

  return (
    <>
      <Button
        size='lg'
        onPress={onOpen}
        isDisabled={items.length < 1}
        className='font-medium text-rose-600'
      >
        Отчистить историю просмотров ({items.length})
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: 'bg-[--bg] border-1 border-white/10 rounded-2xl shadow-lg',
        }}
      >
        <ModalContent>
          {(onClose) => <DeleteModalContent onClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
};
