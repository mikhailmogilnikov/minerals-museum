export const SearchModalAnimationVariants = {
  hidden: {
    backgroundColor: 'var(--element)',
    width: 224,
    height: 56,
    bottom: 40,
    right: 112,
    borderRadius: 200,
    transition: { ease: [1, 0, 1, 0], duration: 0.7 },
  },
  expanded: {
    backgroundColor: 'var(--bg)',
    width: '100vw',
    height: '100dvh',
    bottom: 0,
    right: 0,
    borderRadius: 0,
    opacity: 1,
    transition: { ease: [0, 1, 0, 1], duration: 0.7 },
  },
};

export const SearchModalFormAnimationVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.3 },
  },
  hidden: { y: 40, opacity: 0 },
  exit: { y: 40, opacity: 0, transition: { delay: 0.1, duration: 0.3 } },
};

export const SearchModalContentAnimationVariants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.3 },
  },
  exit: { y: 50, opacity: 0, transition: { duration: 0.4 } },
};
