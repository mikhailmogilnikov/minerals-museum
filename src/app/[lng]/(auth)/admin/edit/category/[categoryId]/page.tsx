import { EditCategoryPage } from '@/page/(auth)/(edit)/edit-category';

type Props = {
  params: {
    categoryId: string;
  };
};

export default function EditCategory({ params: { categoryId } }: Props) {
  return <EditCategoryPage categoryId={categoryId} />;
}
