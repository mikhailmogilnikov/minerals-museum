import { PiMagnifyingGlass } from 'react-icons/pi';
import { Categories, MineralsData } from '@/shared/api/minerals-data';
import { findByKeyword } from '@/shared/lib/utils/find-by-keyword';
import { Card } from '@/shared/ui/card';
import { Chip } from '@/shared/ui/chip';
import { Placeholder } from '@/shared/ui/placeholder';

type Props = {
  value: string;
  handleClose: () => void;
};

export const SearchResults = ({ value, handleClose }: Props) => {
  const foundCategories = Categories.filter(({ name }) =>
    findByKeyword(value, name),
  );

  const foundItems = MineralsData.filter(({ name }) =>
    findByKeyword(value, name),
  );

  return (
    <div className='w-full flex flex-col gap-10'>
      {foundCategories.length > 0 && (
        <div className='w-full flex flex-col gap-4'>
          <h3 className='text-xl font-semibold'>Категории</h3>
          <div className='w-full flex gap-3 flex-wrap'>
            {foundCategories.map(({ id }) => (
              <Chip key={id} categoryId={id} onPress={handleClose} />
            ))}
          </div>
        </div>
      )}

      {foundItems.length > 0 && (
        <div className='w-full flex flex-col gap-4'>
          <h3 className='text-xl font-semibold'>Минералы</h3>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-8'>
            {foundItems.map(({ name, id, img }) => (
              <div key={id} className='w-full aspect-[4/5]'>
                <Card title={name} img={img} path={`/minerals/${id}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {foundItems.length === 0 && foundCategories.length === 0 && (
        <div className='w-full flex items-center justify-center mt-10'>
          <Placeholder
            icon={<PiMagnifyingGlass size={60} className='opacity-50' />}
            title='Ничего не найдено'
            desc='Попробуйте ввести другое ключевое слово'
          />
        </div>
      )}
    </div>
  );
};
