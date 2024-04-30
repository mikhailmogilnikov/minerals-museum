'use client';

import { NextUIProvider } from '@nextui-org/react';
import { LazyMotion as FramerMotionProvider, domMax } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider, OriginTracker } from '@/shared/lib/providers';
import { CategoriesProvider } from '@/shared/lib/providers/categories-provider';
import { ThemeColorObserver } from '@/shared/lib/utils/client/theme-color-observer';

type Props = {
  children: React.ReactNode;
  lng: string;
};

const Providers = ({ children, lng }: Props) => (
  <FramerMotionProvider features={domMax}>
    <LanguageProvider lng={lng}>
      <NextUIProvider>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <ThemeColorObserver>
            <OriginTracker>
              <CategoriesProvider>{children}</CategoriesProvider>
            </OriginTracker>
          </ThemeColorObserver>
        </ThemeProvider>
      </NextUIProvider>
    </LanguageProvider>
  </FramerMotionProvider>
);

export default Providers;
