export enum ModalType {
  PROJECT,
  COLUMN,
  CARD,
};

export enum ModalMode {
  CREATE,
  EDIT,
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
