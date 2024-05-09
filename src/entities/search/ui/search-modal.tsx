import { AnimatePresence, m, useWillChange } from 'framer-motion';
import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { SearchModalAnimationVariants } from '../config/animation-variants';
import { SearchInput } from './search-input';
import { SearchResultsBlock } from './search-results';

type Props = {
  isExpanded: boolean;
  setIsExpanded: (bool: boolean) => void;
};

export const SearchModal = ({ isExpanded, setIsExpanded }: Props) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const willChange = useWillChange();

  const handleClose = () => {
    setIsExpanded(false);
    setDebouncedValue('');
  };

  return (
    <AnimatePresence>
      {isExpanded && (
        <RemoveScroll className='fixed z-50'>
          <m.div
            variants={SearchModalAnimationVariants}
            initial='hidden'
            animate='expanded'
            exit='hidden'
            style={{ willChange }}
            className='fixed z-50 flex flex-col items-start shadow-base'
          >
            <SearchInput
              setDebouncedValue={setDebouncedValue}
              handleClose={handleClose}
              setIsLoading={setIsLoading}
            />

            <SearchResultsBlock
              isLoading={isLoading}
              value={debouncedValue}
              handleClose={handleClose}
            />
          </m.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};
