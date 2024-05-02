import { CategoriesPage } from '@/page/categories';

type Props = {
  params: { lng: string };
};

export default function Categories({ params: { lng } }: Props) {
  return <CategoriesPage lng={lng} />;
}
