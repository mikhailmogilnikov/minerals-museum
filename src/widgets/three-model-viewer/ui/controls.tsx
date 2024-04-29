import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { LuRotate3D } from 'react-icons/lu';
import { PiCornersOutBold, PiCornersInBold } from 'react-icons/pi';

type Props = {
  isAutoRotate: boolean;
  isFullscreen: boolean;
  handleClickControl: (e: any) => void;
};

export const ThreeControls = ({
  isAutoRotate,
  isFullscreen,
  handleClickControl,
}: Props) => {
  return (
    <div className='absolute max-lg:right-3 lg:left-3 bottom-3 flex flex-row gap-3'>
      <Tooltip content='Автоповорот'>
        <Button
          id='rotate'
          size='sm'
          radius='md'
          variant='flat'
          onClick={handleClickControl}
          isIconOnly
        >
          <LuRotate3D
            size={20}
            className={isAutoRotate ? 'opacity-100' : 'opacity-60'}
          />
        </Button>
      </Tooltip>

      <Tooltip content='На весь экран'>
        <Button
          id='fullscreen'
          size='sm'
          radius='md'
          onClick={handleClickControl}
          variant='flat'
          isIconOnly
        >
          {isFullscreen ? (
            <PiCornersInBold size={20} className='opacity-100' />
          ) : (
            <PiCornersOutBold size={20} className='opacity-60' />
          )}
        </Button>
      </Tooltip>
    </div>
  );
};
