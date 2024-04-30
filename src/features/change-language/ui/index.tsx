import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { useRouter } from 'next/navigation';
import { PiCaretUpDownBold, PiTranslateBold } from 'react-icons/pi';
import { languages } from '@/shared/i18n/settings';
import { useClientTranslation } from '@/shared/i18n/use-client-translation';
import { useLangContext } from '@/shared/lib/providers';

export const ChangeLanguage = () => {
  const lang = useLangContext();
  const { t } = useClientTranslation();
  const { push } = useRouter();

  return (
    <Dropdown
      backdrop='blur'
      placement='bottom'
      classNames={{ backdrop: 'bg-white/30 dark:bg-black/30' }}
    >
      <DropdownTrigger>
        <button
          type='button'
          className='px-4 py-2 rounded-full bg-default shadow-base flex gap-3 items-center hover:shadow-base active:shadow-none hover:scale-105 active:scale-95 transition-all outline-none'
        >
          <PiTranslateBold className='w-auto h-1/2' />
          <p>{t(`language.${lang}`)}</p>
          <PiCaretUpDownBold className='w-auto h-1/2 opacity-50' />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={new Set(languages)}
        aria-label='Theme selector'
      >
        {languages.map((lng) => (
          <DropdownItem onPress={() => push(`/${lng}`)} key={lng}>
            {t(`language.${lng}`)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
