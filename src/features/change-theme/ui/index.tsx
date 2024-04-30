import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { useTheme } from 'next-themes';
import { PiCaretUpDownBold } from 'react-icons/pi';
import { useClientTranslation } from '@/shared/i18n/use-client-translation';
import { ThemeIcons } from '../config/theme-icons';

export const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useClientTranslation();

  const ThemeIcon = ThemeIcons[theme as 'light' | 'dark' | 'system'];

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
          <ThemeIcon className='w-auto h-1/2' />
          <p>{t(`theme.${theme}`)}</p>
          <PiCaretUpDownBold className='w-auto h-1/2 opacity-50' />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={new Set([theme as 'light' | 'dark' | 'system'])}
        aria-label='Theme selector'
      >
        <DropdownItem onPress={() => setTheme('light')} key='light'>
          {t('theme.light')}
        </DropdownItem>
        <DropdownItem onPress={() => setTheme('dark')} key='dark'>
          {t('theme.dark')}
        </DropdownItem>
        <DropdownItem onPress={() => setTheme('system')} key='system'>
          {t('theme.system')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
