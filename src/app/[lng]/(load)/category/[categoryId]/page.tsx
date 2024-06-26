import { CategoryPage } from '@/page/category/ui';

type Props = {
  params: { lng: string; categoryId: string };
};

export default async function Category({ params: { lng, categoryId } }: Props) {
  return <CategoryPage lng={lng} categoryId={categoryId} />;
}
