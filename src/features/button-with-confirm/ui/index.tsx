import { Button } from '@nextui-org/button';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import { ReactNode } from 'react';
import { ModalVariants } from '../config/animation-variants';
import { ConfirmModalContent } from './modal';

type Props = {
  icon?: ReactNode;
  children: ReactNode;
  radius?: 'full';
  className?: string;
  description: string;
  confirmTitle?: string;
  confirmColor?: 'danger';
  actionFn: () => void | Promise<void>;
};

export const ButtonWithConfirm = ({
  icon,
  children,
  radius,
  className,
  description,
  confirmTitle,
  confirmColor,
  actionFn,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        radius={radius}
        size='lg'
        className={`font-medium ${className}`}
        onPress={onOpen}
        startContent={icon}
      >
        {children}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: 'bg-[--bg] border-1 border-white/10 rounded-b-none rounded-t-3xl sm:rounded-3xl shadow-lg m-0',
          closeButton: 'hidden',
        }}
        motionProps={ModalVariants}
      >
        <ModalContent>
          {(onClose) => (
            <ConfirmModalContent
              onClose={onClose}
              icon={icon}
              description={description}
              confirmTitle={confirmTitle}
              confirmColor={confirmColor}
              actionFn={actionFn}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
