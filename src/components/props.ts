import { spacingValidator, variationValidator } from '@/components/utils';
import { IOption } from '@/components/IOption';
import {
  IFormControlProps,
  IInputControlProps,
  IListControlProps,
  ISelectControlProps,
  ITextInputControlProps,
  IVariantionProps,
} from '@/components/IProps';

export const formControlProps = (): IFormControlProps => ({
  disabled: { type: Boolean, default: false },
});

export const inputControlProps = (): IInputControlProps => ({
  ...formControlProps(),
  id: { type: String, required: true },
  label: { type: String, required: true },
  name: { type: String, required: true },
  required: { type: Boolean, default: false },
  validation: { type: [String, Object], default: null },
  value: { type: [String, Number, Boolean], default: null },
});

export const textInputControlProps = (): ITextInputControlProps => ({
  ...inputControlProps(),
  placeholder: { type: String, default: null },
  autofocus: { type: Boolean, default: false },
  type: { type: String, default: 'text' },
  readonly: { type: Boolean, default: false },
  description: { type: String, default: '' },
  errorMessage: { type: String, default: '' },
  autocomplete: { type: String, default: 'off' },
});

export const listControlProps = (): IListControlProps => ({
  items: { type: Array, default: (): IOption[] => [] },
});

export const selectControlProps = (): ISelectControlProps => ({
  ...listControlProps(),
  multiSelect: { type: Boolean, default: false },
});

export const variationProps = (color = 'default', size = 'md'): IVariantionProps => ({
  color: { type: String, validator: variationValidator, default: color },
  size: { type: String, validator: spacingValidator, default: size },
});
