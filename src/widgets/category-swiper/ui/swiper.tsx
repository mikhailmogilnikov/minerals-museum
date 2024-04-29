'use client';

import { EffectCards, Pagination, Virtual } from 'swiper/modules';
import { Swiper as NativeSwiper, SwiperSlide } from 'swiper/react';
import { MineralType } from '@/shared/model/mineral.type';
import { Card } from '@/shared/ui/card';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './styles.css';

type Props = {
  collection: MineralType[];
};

export const Swiper = ({ collection }: Props) => {
  return (
    <NativeSwiper
      pagination={{
        dynamicBullets: true,
      }}
      effect='cards'
      virtual={{ addSlidesAfter: 3, addSlidesBefore: 3 }}
      grabCursor
      cardsEffect={{
        slideShadows: false,
      }}
      modules={[EffectCards, Pagination, Virtual]}
      className='cards-swiper'
    >
      {collection.map((mineral, index) => {
        return (
          <SwiperSlide key={mineral.id} virtualIndex={index}>
            <div className='w-72 h-96 flex-shrink-0 dark:shadow-medium rounded-2xl'>
              <Card
                title={mineral.name}
                img={mineral.img}
                path={`/minerals/${mineral.id}`}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </NativeSwiper>
  );
};
