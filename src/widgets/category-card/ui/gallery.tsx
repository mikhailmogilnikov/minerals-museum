'use client';

import { AnimatePresence, m } from 'framer-motion';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL } from '@/shared/config';
import { CategoryType, MineralType } from '@/shared/model/mineral.type';
import 'swiper/css';

type Props = {
  category: CategoryType;
  collection: MineralType[];
};

export const CardGallery = ({ category, collection }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
      loop
      centeredSlides
      modules={[Autoplay]}
    >
      {collection.map((mineral, index) => (
        <SwiperSlide
          key={`${category.id}_${mineral.id}`}
          virtualIndex={index}
          className='mt-8'
        >
          {({ isActive }) => (
            <>
              <AnimatePresence>
                {isActive ? (
                  <m.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.4, opacity: 1 }}
                    className='flex items-center justify-center'
                  >
                    <Image
                      src={`${BASE_URL}${mineral.img}`}
                      alt={mineral.name}
                      width={200}
                      height={200}
                      className='m-auto w-full h-full'
                    />
                  </m.div>
                ) : (
                  <Image
                    src={`${BASE_URL}${mineral.img}`}
                    alt={mineral.name}
                    width={200}
                    height={200}
                    className='m-auto scale-80 opacity-50 w-full h-full'
                  />
                )}
              </AnimatePresence>
              {isActive && (
                <p className='pt-5 text-xl font-semibold'>{mineral.name}</p>
              )}
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
