'use client';

import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { MineralType } from '@/shared/model/mineral.type';
import { Card } from '@/shared/ui/card';
import './styles.css';

type Props = {
  collection: MineralType[];
  className?: string;
};

export const Carousel = ({ collection, className }: Props) => {
  return (
    <Swiper
      cssMode
      navigation
      mousewheel
      keyboard
      slidesPerView='auto'
      modules={[Navigation, Mousewheel, Keyboard]}
      className={`carousel ${className}`}
    >
      {collection.map((mineral) => (
        <SwiperSlide key={mineral.id} className='w-56 h-72 flex-shrink-0'>
          <div className='w-40 aspect-[4/5] md:w-56 flex-shrink-0'>
            <Card
              key={mineral.id}
              title={mineral.name}
              img={mineral.img}
              path={`/minerals/${mineral.id}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
