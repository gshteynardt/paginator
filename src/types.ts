import { SyntheticEvent, ReactNode } from 'react';

export interface OptionsItem {
  disabled?: boolean;
  type: string;
  page: number;
  selected: boolean;
  icon?: ReactNode;
  onClick: (e?: SyntheticEvent) => void;
}
