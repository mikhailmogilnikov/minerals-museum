import { Skeleton } from '@nextui-org/skeleton';

export const SearchSkeleton = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='w-full flex flex-col gap-4'>
        <Skeleton className='w-32 h-7 rounded-xl' />
        <div className='w-full flex gap-3 flex-wrap'>
          <Skeleton className='w-20 h-8 rounded-full' />
          <Skeleton className='w-32 h-8 rounded-full' />
          <Skeleton className='w-28 h-8 rounded-full' />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <Skeleton className='w-32 h-7 rounded-xl' />
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-8'>
          <Skeleton className='w-full aspect-[3/4] rounded-2xl' />
          <Skeleton className='w-full aspect-[3/4] rounded-2xl' />
          <Skeleton className='w-full aspect-[3/4] rounded-2xl' />
          <Skeleton className='w-full aspect-[3/4] rounded-2xl' />
          <Skeleton className='w-full aspect-[3/4] rounded-2xl' />
          <Skeleton className='w-full aspect-[3/4] rounded-2xl' />
          <Skeleton className='w-full aspect-[3/4] rounded-2xl' />
        </div>
      </div>
    </div>
  );
};
