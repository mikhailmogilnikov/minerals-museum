import { CategoryCard } from '@/widgets/category-card';
import { CategoryCarousel } from '@/widgets/category-carousel';
import { CategorySwiper } from '@/widgets/category-swiper';
import { MineralsData } from '@/shared/api/minerals-data';
import { CategoryType } from '@/shared/model/mineral.type';

type Props = {
  categoriesList: CategoryType[];
};

export const CategoriesListMobile = ({ categoriesList }: Props) => {
  return (
    <div className='w-full flex flex-col gap-10 md:hidden'>
      {categoriesList.map((category, index) => {
        const collection = MineralsData.filter(({ categories }) =>
          categories.includes(category.id),
        );

        switch (index % 3) {
          case 1:
            return (
              <CategoryCarousel
                key={category.id}
                category={category}
                collection={collection}
              />
            );
          case 2:
            return (
              <CategorySwiper
                key={category.id}
                category={category}
                collection={collection}
              />
            );
          default:
            return (
              <CategoryCard
                key={category.id}
                category={category}
                collection={collection}
              />
            );
        }
      })}
    </div>
  );
};
