/* eslint-disable react-hooks/exhaustive-deps */
import { useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PiQuestionBold } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';
import { MineralsData } from '@/shared/api/minerals-data';
import { MineralType } from '@/shared/model/mineral.type';
import { ClosableNotification } from '@/shared/ui/closable-notification';
import { ExploreCard } from './card';
import { ExploreControls } from './controls';

type Props = {
  incUpdater: () => void;
};

export const ExploreWidget = ({ incUpdater }: Props) => {
  const x = useMotionValue(0);
  const [isClosable, setIsClosable] = useState(false);
  const [activeItemId, setActiveItemId] = useLocalStorage<number>(
    'explore-active-item',
  );
  const [viewedItemsIds, setViewedItemsIds] = useLocalStorage<number[]>(
    'explore-viewed-items',
    [],
  );
  const [exploredItems] = useLocalStorage<number[]>('visited-items', []);
  const [backCounter, setBackCounter] = useState(0);

  // const isBackable = backCounter < (viewedItemsIds || []).length;

  const getItemList = () => {
    const itemsWithActive = activeItemId
      ? [
          MineralsData[activeItemId],
          ...MineralsData.filter(({ id }) => id !== activeItemId),
        ]
      : MineralsData;

    if ((exploredItems || []).length >= MineralsData.length) {
      return itemsWithActive;
    }

    if ((viewedItemsIds || []).length >= MineralsData.length) {
      const filteredItems = itemsWithActive.filter(
        ({ id }) => !(exploredItems || []).includes(id) || id === activeItemId,
      );

      return filteredItems.length > 1
        ? filteredItems
        : [...filteredItems, itemsWithActive[Math.round(Math.random() * 10)]];
    }

    const result = itemsWithActive
      .filter(
        ({ id }) => !(exploredItems || []).includes(id) || id === activeItemId,
      )
      .filter(({ id }) => !viewedItemsIds?.includes(id));

    return result.length > 1 ? result : itemsWithActive;
  };

  const itemsList = getItemList();

  const [itemCounter, setItemCounter] = useState(0);
  const [activeMineral, setActiveMineral] = useState<MineralType>(itemsList[0]);
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    if (isFaded) {
      setTimeout(() => {
        setIsFaded(false);
      }, 300);
    }
  }, [isFaded]);

  useEffect(() => {
    setActiveItemId(activeMineral.id);
  }, [activeMineral]);

  const setNextItem = () => {
    setIsFaded(true);
    setItemCounter(itemCounter + 1);

    const newViewedItemsIds = (viewedItemsIds || []).filter(
      (id) => id !== activeMineral.id,
    );
    setViewedItemsIds([activeMineral.id, ...newViewedItemsIds]);

    const isOutOfRange = itemCounter + 1 >= itemsList.length;

    if (isOutOfRange) {
      setItemCounter(0);
    }

    const nextItem = isOutOfRange ? itemsList[1] : itemsList[itemCounter + 1];

    setActiveMineral(nextItem);

    if (backCounter > 0) {
      setBackCounter(backCounter - 1);
    }

    incUpdater();
  };

  const handleDragEnd = () => {
    if (isClosable) {
      setNextItem();
    }
    setIsClosable(false);
  };

  // const handleClickBack = () => {
  //   if (viewedItemsIds) {
  //     if (itemCounter > 0) {
  //       setItemCounter(itemCounter - 1);
  //     }

  //     console.log(itemsList)

  //     setActiveMineral(MineralsData[viewedItemsIds[backCounter]]);
  //     setBackCounter(backCounter + 1);
  //     setIsFaded(true);
  //   }
  // };

  const handleClickForward = () => {
    setNextItem();
  };

  return (
    <div className='w-full h-min pt-4 flex flex-col gap-8 items-center justify-center'>
      <div className='w-full h-96 flex items-center justify-center'>
        {!isFaded && (
          <ExploreCard
            x={x}
            handleDragEnd={handleDragEnd}
            setIsClosable={setIsClosable}
            data={activeMineral}
          />
        )}
      </div>

      <ExploreControls
        isClosable={isClosable}
        itemId={activeMineral.id}
        // handleClickBack={handleClickBack}
        // isBackable={isBackable}
        handleClickForward={handleClickForward}
      />
      <ClosableNotification
        icon={<PiQuestionBold size={20} className='flex-shrink-0' />}
      >
        Потяните карточку налево или направо чтобы перейти к следующему
        экспонату.
      </ClosableNotification>
    </div>
  );
};
