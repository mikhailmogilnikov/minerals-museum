'use client';

import { Button } from '@nextui-org/button';
import { m } from 'framer-motion';
import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';

type Props = {
  text: string;
  tag?: string;
  className?: string;
};

export const TextExpand = ({
  text,
  tag = 'p',
  className = 'text-md lg:text-xl font-medium opacity-60',
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const Tag = tag as any;

  return (
    <>
      {text.split('\n').map((sent, index) => {
        return !isExpanded ? (
          index === 0 && (
            <Tag key={sent} className={className}>
              {sent}
            </Tag>
          )
        ) : (
          <Tag key={sent} className={className}>
            {sent}
          </Tag>
        );
      })}
      <Button
        type='button'
        onClick={handleExpand}
        className='w-fit px-4 py-2 rounded-2xl bg-default shadow-base flex justify-center items-center gap-2 text-sm'
      >
        <m.div animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}>
          <PiCaretDownBold />
        </m.div>

        {isExpanded ? 'Скрыть описание' : ' Раскрыть описание'}
      </Button>
    </>
  );
};
