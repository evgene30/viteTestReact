export type TPagination = {
  [key: string]: {
    offset: number;
  };
};

export type TSettings = {
  pagination: TPagination;
  sorting: number[];
};

export type TUnicKey = {
  keyPrimary: string;
  addKey?: string;
};

export type TActionType = {
  keyPrimary: string;
  addKey?: string;
  settings: TSettings;
};

export type TCounterState = {
  [key: string]: TSettings;
};
