export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

export const scale = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};
