import { AnimatePresence, m, useWillChange } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import { MgriLogo } from '@/shared/assets/MgriLogo';
import { MenuModalAnimationVariants } from '../config/animation-variants';
import { MenuCloseButton } from './menu-close-button';
import { MenuControls } from './menu-controls';

type Props = {
  isExpanded: boolean;
  setIsExpanded: (bool: boolean) => void;
};

export const MenuModal = ({ isExpanded, setIsExpanded }: Props) => {
  const willChange = useWillChange();

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isExpanded && (
        <RemoveScroll removeScrollBar={false} className='fixed z-50'>
          <m.div
            variants={MenuModalAnimationVariants}
            initial='hidden'
            animate='expanded'
            exit='close'
            style={{ willChange }}
            className='fixed top-0 left-0 z-50 w-dvw h-dvh flex flex-col items-start bg-[--bg] '
          >
            <MenuControls handleClose={handleClose} />
            <MenuCloseButton handleClose={handleClose} />
            <div className='h-[100vh] hidden md:block aspect-square absolute -bottom-[20vh] -right-[35vh] opacity-5 z-0'>
              <MgriLogo className='w-full h-auto' />
            </div>
          </m.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};
