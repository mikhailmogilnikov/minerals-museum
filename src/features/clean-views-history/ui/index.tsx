/* eslint-disable @conarti/feature-sliced/layers-slices */

import { PiTrashBold } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';
import { ButtonWithConfirm } from '@/features/button-with-confirm';

export const CleanHistoryButton = () => {
  const [visitedItems, , deleteItems] = useLocalStorage<number[]>(
    'visited-items',
    [],
  );
  const [, , deleteExploreItems] = useLocalStorage('explore-viewed-items', []);

  const handleDelete = () => {
    deleteItems();
    deleteExploreItems();
    window.location.reload();
  };

  const items = visitedItems || [];

  return (
    <ButtonWithConfirm
      icon={<PiTrashBold size={18} className='flex-shrink-0' />}
      className='w-full text-danger'
      description='Вы собираетесь удалить всю историю просмотров. Это действие
        распространится на изученные экспонаты и просмотренные карточки в
        режиме исследования. Продолжить?'
      confirmColor='danger'
      confirmTitle='Удалить'
      actionFn={handleDelete}
    >
      Отчистить историю просмотров ({items.length})
    </ButtonWithConfirm>
  );
};
