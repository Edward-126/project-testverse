export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "item1",
    route: "#temp",
  },
  {
    label: "item2",
    route: "/item2",
  },
  {
    label: "item3",
    route: "/item3",
  },
  {
    label: "item4",
    route: "/item4",
  },
];

export const menuVariants = {
  closed: {
    opacity: 0,
    height: "0",
  },
  open: {
    opacity: 1,
    height: "100vh",
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
      ease: "easeIn",
    },
  },
};

export const navItemsVariants = {
  closed: {
    opacity: 0.7,
    y: "5%",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
      ease: "easeOut",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
      ease: "easeIn",
    },
  },
};
