import { EditItemPage } from '@/page/(auth)/(edit)/edit-item';

type Props = {
  params: {
    itemId: string;
  };
};

export default function EditItem({ params: { itemId } }: Props) {
  return <EditItemPage itemId={itemId} />;
}
