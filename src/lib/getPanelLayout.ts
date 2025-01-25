export const getPanelLayout = (panelCount: number) => {
  switch (panelCount) {
    case 2:
      return 'grid-cols-2';
    case 3:
      return 'grid-cols-3';
    case 4:
      return 'grid-cols-2';
    case 6:
      return 'grid-cols-3';
    default:
      return 'grid-cols-2';
  }
};
