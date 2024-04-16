/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import { useTranslation } from '@/shared/i18n';
import { fallbackLng, languages } from '@/shared/i18n/settings';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

type MetadataProps = {
  params: { lng: string };
};

type PageProps = MetadataProps & {
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }: MetadataProps) {
  // eslint-disable-next-line no-param-reassign
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({ children, params: { lng } }: PageProps) {
  return (
    <html suppressHydrationWarning className='dark' lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  );
}
