import { EditGroupPage } from '@/page/(auth)/(edit)/edit-group';

type Props = {
  params: {
    groupId: string;
  };
};

export default function EditGroup({ params: { groupId } }: Props) {
  return <EditGroupPage groupId={groupId} />;
}
