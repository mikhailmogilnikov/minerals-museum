import { MotionValue, m, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  x: MotionValue<number>;
  onClick: () => void;
  onDragEnd: (_: any, info: any) => void;
  className?: string;
};

export const DraggableCard = ({
  children,
  x,
  onClick,
  onDragEnd,
  className = 'w-72 aspect-[3/4] cursor-grab relative',
}: Props) => {
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const rotate = useTransform(x, [-300, 0, 300], [-20, 0, 20]);
  const scale = useTransform(x, [-150, 0, 150], [0.75, 1, 0.75]);

  return (
    <m.div
      initial={{ scale: 0.8, opacity: 0, filter: 'blur(24px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      exit={{ scale: 0.8, opacity: 0, filter: 'blur(24px)' }}
      drag='x'
      dragSnapToOrigin
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      style={{ x, opacity, rotate, scale }}
      onDragEnd={onDragEnd}
      onClick={onClick}
      className={className}
    >
      {children}
    </m.div>
  );
};
