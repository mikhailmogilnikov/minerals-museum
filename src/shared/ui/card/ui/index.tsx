import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  img: string;
  path: string;
};

export const Card = ({ title, img, path }: Props) => {
  return (
    <Link href={path}>
      <div className='w-full h-full bg-[--element] shadow-base rounded-2xl flex-shrink-0 flex flex-col hover:scale-[1.02] hover:shadow-hover active:scale-[0.98] active:shadow-none relative transition-all justify-end'>
        <Image
          alt={title}
          src={img}
          width={200}
          height={200}
          className='w-full aspect-square absolute top-0'
        />
        <div className='w-full p-4'>
          <h5 className='text-lg font-medium'>{title}</h5>
        </div>
      </div>
    </Link>
  );
};
