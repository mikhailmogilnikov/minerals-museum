/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @conarti/feature-sliced/layers-slices */

import { Button } from '@nextui-org/button';
import html2canvas from 'html2canvas';
import { ChangeEventHandler, memo, useEffect, useRef, useState } from 'react';
import { PiCameraBold, PiPencilSimpleBold, PiPlusBold } from 'react-icons/pi';
import { ThreeModelViewer } from '@/widgets/three-model-viewer';
import { ChangeTheme } from '@/features/change-theme';

type Props = {
  model: File | string | undefined;
  setModel: (file: File) => void;
  image: File | string | undefined;
  setImage: (file: File) => void;
};

export const InputThreeModel = memo(
  ({ model, setModel, image, setImage }: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const modelRef = useRef<HTMLDivElement>(null);
    const [rerender, setRerender] = useState(false);

    const getImage = async () => {
      const resp = await html2canvas(modelRef.current as any, {
        backgroundColor: null,
      });
      resp.toBlob((blob) => {
        const file = new File([blob as any], 'fileName.png', {
          type: 'image/png',
        });
        setImage(file);
      }, 'image/png');
    };

    useEffect(() => {
      if (model && modelRef.current && typeof image !== 'string') {
        setTimeout(() => {
          getImage();
        }, 2000);
      }
    }, [model, modelRef]);

    useEffect(() => {
      if (rerender) {
        setTimeout(() => {
          setRerender(false);
        }, 50);
      }
    }, [rerender]);

    const handleOpenInput = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const { files } = e.target;

      if (files) {
        setModel(files[0]);
        setRerender(true);
      }
    };

    return (
      <div className='w-full flex flex-col gap-4'>
        <div className='w-full flex gap-2 items-center'>
          <p className='font-medium opacity-50'>3D модель (.glb)</p>
          <div className='w-2 h-2 rounded-full bg-danger shadow-2xl shadow-red-600 mt-[2px]' />
        </div>
        {model && (
          <div className='w-24 h-fit'>
            <ChangeTheme />
          </div>
        )}
        {model && (
          <div className='w-full aspect-square border-1 dark:border-white/10 shadow-base rounded-2xl overflow-hidden  cursor-grab '>
            <div
              ref={modelRef}
              className='w-full h-full flex justify-center items-center'
            >
              {!rerender && (
                <ThreeModelViewer
                  disableControls
                  isExpanded={false}
                  setIsExpanded={() => {}}
                  model={
                    typeof model === 'string'
                      ? model
                      : URL.createObjectURL(model)
                  }
                  resizeScale={5}
                />
              )}
            </div>
          </div>
        )}

        <div className='w-full flex flex-col md:flex-row gap-4 items-center flex-shrink-0'>
          <Button
            size='lg'
            className='shadow-base font-medium w-full md:w-fit'
            onPress={handleOpenInput}
          >
            {model ? (
              <>
                <PiPencilSimpleBold size={18} />
                Изменить модель
              </>
            ) : (
              <>
                <PiPlusBold size={18} />
                Загрузить
              </>
            )}
          </Button>
          {image && (
            <Button
              onPress={() => getImage()}
              size='lg'
              className='shadow-base font-medium w-full md:w-fit'
            >
              <PiCameraBold size={18} />
              Переснять миниатюру
            </Button>
          )}
        </div>

        <input
          type='file'
          accept='.glb'
          className='hidden'
          onChange={handleInputChange}
          ref={fileInputRef}
        />
      </div>
    );
  },
);
