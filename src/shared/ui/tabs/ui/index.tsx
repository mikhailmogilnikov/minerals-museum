/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { Tabs as NativeTabs, Tab } from '@nextui-org/tabs';
import { usePathname, useRouter } from 'next/navigation';
import { Key, useEffect } from 'react';
import { useClientTranslation } from '@/shared/i18n/use-client-translation';

type Props = {
  items: { id: number; name: string; href: string }[];
};

export const Tabs = ({ items }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useClientTranslation();

  const pathWithoutLocation = pathname.slice(3);
  const truePath = pathWithoutLocation === '' ? '/' : pathWithoutLocation;

  useEffect(() => {
    items.forEach(({ href }) => {
      router.prefetch(href);
    });
  }, []);

  const handleChange = (value: Key) => {
    router.push(value as string);
  };

  return (
    <NativeTabs
      radius='lg'
      size='lg'
      color='primary'
      aria-label='Tabs'
      variant='light'
      selectedKey={truePath}
      onSelectionChange={handleChange}
      classNames={{
        tabList: 'p-0',
        cursor: 'rounded-[14px]',
        tabContent: 'font-medium',
      }}
    >
      {items.map(({ name, href }) => (
        <Tab key={href} title={t(`tabs.${name}`)} />
      ))}
    </NativeTabs>
  );
};
