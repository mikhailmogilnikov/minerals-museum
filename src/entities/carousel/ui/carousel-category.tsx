'use client';

import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { CategoryType } from '@/shared/model/mineral.type';
import { CategoryCard } from '@/shared/ui/card';

import './styles.css';

type Props = {
  collection: CategoryType[];
  className?: string;
};

export const CarouselCategory = ({ collection, className }: Props) => {


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
      {collection.map(({ id, name }) => {
        return (
          <SwiperSlide key={id} className='w-56 h-72 flex-shrink-0'>
            <div className='w-40 sm:w-48 aspect-[3/4] md:w-56 flex-shrink-0'>
              <CategoryCard id={id} name={name} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
