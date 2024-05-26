/* eslint-disable @conarti/feature-sliced/layers-slices */

import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { ButtonWithConfirm } from '@/features/button-with-confirm';

type Props = {
  updater: number;
};

export const CleanExploreHistoryButton = ({ updater }: Props) => {
  const [viewedItemsIds, setViewedItemsIds] = useState([]);
  const [__, _, deleteItems] = useLocalStorage('explore-viewed-items', []);

  const handleDelete = () => {
    deleteItems();
    window.location.reload();
  };

  useEffect(() => {
    const items = localStorage.getItem('explore-viewed-items');
    const parsedItems = JSON.parse(items || '[]');
    setViewedItemsIds(parsedItems);
  }, [updater]);

  return (
    <ButtonWithConfirm
      className='w-fit'
      description=' Вы собираетесь стереть историю просмотренных карточек в режиме
        исследования. Это действие не затронет историю просмотров экспонатов.
        Продолжить?'
      confirmTitle='Стереть'
      actionFn={handleDelete}
    >
      Сброс просмотров ({viewedItemsIds.length})
    </ButtonWithConfirm>
  );
};
