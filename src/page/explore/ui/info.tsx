import { CleanExploreHistoryButton } from '@/features/clean-explore-views';
import { ViewsCount } from '@/entities/views-count';
import { SkippedCount } from './skipped-count';

type Props = {
  updater: number;
};

export const ExploreInfo = ({ updater }: Props) => {
  return (
    <div className='w-full flex flex-col gap-6'>
      <ViewsCount />
      <SkippedCount updater={updater} />
      <div />
      <CleanExploreHistoryButton updater={updater} />
    </div>
  );
};
