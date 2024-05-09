import { Button } from '@nextui-org/button';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import { useEffect, useState } from 'react';
import { DeleteModalContent } from './modal';

type Props = {
  updater: number;
};

export const CleanExploreHistoryButton = ({ updater }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [viewedItemsIds, setViewedItemsIds] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('explore-viewed-items');
    const parsedItems = JSON.parse(items || '[]');
    setViewedItemsIds(parsedItems);
  }, [updater]);

  return (
    <>
      <Button
        size='md'
        onPress={onOpen}
        isDisabled={viewedItemsIds.length < 1}
        className='font-medium w-fit'
      >
        Сброс просмотров
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
