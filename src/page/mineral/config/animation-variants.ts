export const ThreeViewerAnimationVariants = (isMobile: boolean) => ({
  static: {
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '70vh' : '100%',
  },
  fullscreen: {
    width: '100%',
    height: '100dvh',
  },
});
