import { PackageAction } from '@/types/packages.types';

// type
export type FormType = 'contact' | PackageAction;
export type FormFields = {
  [key: string]: { initialValue: string | boolean; isRequired: boolean };
};

export type FieldErrorSize = 'sm' | 'md' | 'lg';
export type FieldLabelSize = 'sm' | 'md' | 'lg';

export type Label = { value: string; className?: string };
