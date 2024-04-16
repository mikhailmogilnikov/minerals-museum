import { ThreeModelViewer } from '@/widgets/three-model-viewer';
import { useTranslation } from '@/shared/i18n';

type Props = {
  lng: string;
};

export const MineralPage = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng);

  return (
    <main className='w-screen min-h-screen flex overflow-hidden'>
      <ThreeModelViewer />
      <div className='w-[1px] h-dvh bg-black/10 dark:bg-white/10 flex-shrink-0' />
      <div className='w-full' />
    </main>
  );
};
