import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { m } from 'framer-motion';
import { SearchModalContentAnimationVariants } from '../../config/animation-variants';
import { SearchResults } from './search-results';
import { SearchSkeleton } from './skeleton';

type Props = {
  value: string;
  isLoading: boolean;
  handleClose: () => void;
};

export const SearchResultsBlock = ({
  value,
  isLoading,
  handleClose,
}: Props) => {
  return (
    <m.div
      variants={SearchModalContentAnimationVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='w-full'
    >
      <ScrollShadow
        visibility='top'
        className='w-full h-[calc(100dvh-64px)] md:h-[calc(100dvh-112px)] p-4 sm:px-6 md:px-12 lg:px-24 pt-8 md:pt-12'
      >
        {isLoading && <SearchSkeleton />}

        {!isLoading && value.length >= 2 && (
          <SearchResults value={value} handleClose={handleClose} />
        )}

        {!isLoading && value.length < 2 && (
          <h4 className='text-lg font-medium opacity-50'>
            Введите хотя бы 2 символа...
          </h4>
        )}
      </ScrollShadow>
    </m.div>
  );
};
