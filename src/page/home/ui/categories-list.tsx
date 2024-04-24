import { CategoryCard } from '@/widgets/category-card';
import { CategoryCarousel } from '@/widgets/category-carousel';
import { CategorySwiper } from '@/widgets/category-swiper';
import { Categories, MineralsData } from '@/shared/api/minerals-data';
import { sortCategories } from '@/shared/lib/utils/sort-categories';

export const CategoriesList = () => {
  const categoriesList = sortCategories(Categories, MineralsData);

  return (
    <div className='w-full grid grid-cols-2 gap-14'>
      {categoriesList.map((category, index) => {
        const collection = MineralsData.filter(({ categories }) =>
          categories.includes(category.id),
        );

        switch (index % 4) {
          case 2:
            return (
              <CategoryCarousel
                key={category.id}
                category={category}
                collection={collection}
              />
            );
          case 3:
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
