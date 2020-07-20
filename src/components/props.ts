import { spacingValidator, variationValidator } from '@/components/utils';
import { IItem } from '@/components/IItem';
import {
  IAnimationProps,
  ICollapseControlProps,
  IFormControlProps,
  IInputControlProps,
  IListControlProps,
  ISelectControlProps,
  ITextInputControlProps,
  IVariationProps,
} from '@/components/IProps';

export const FormControlProps = (): IFormControlProps => ({
  disabled: { type: Boolean, default: false },
});

export const InputControlProps = (): IInputControlProps => ({
  ...FormControlProps(),
  id: { type: String, required: true },
  label: { type: String, required: true },
  name: { type: String, required: true },
  required: { type: Boolean, default: false },
  validation: { type: [String, Object], default: null },
  value: { type: [String, Number, Boolean], default: null },
});

export const TextInputControlProps = (): ITextInputControlProps => ({
  ...InputControlProps(),
  placeholder: { type: String, default: null },
  autofocus: { type: Boolean, default: false },
  type: { type: String, default: 'text' },
  readonly: { type: Boolean, default: false },
  description: { type: String, default: '' },
  errorMessage: { type: String, default: '' },
  autocomplete: { type: String, default: 'off' },
});

export const ListControlProps = (): IListControlProps => ({
  items: { type: Array, default: (): IItem[] => [] },
});

export const SelectControlProps = (): ISelectControlProps => ({
  ...ListControlProps(),
  multiSelect: { type: Boolean, default: false },
});

export const VariationProps = (color = 'default', size = 'md'): IVariationProps => ({
  color: { type: String, validator: variationValidator, default: color },
  size: { type: String, validator: spacingValidator, default: size },
});

export const AnimationProps = (): IAnimationProps => ({
  duration: { type: Number, default: 250 },
});

export const CollapseControlProps = (): ICollapseControlProps => ({
  ...AnimationProps(),
  show: { type: Boolean, default: true },
});
