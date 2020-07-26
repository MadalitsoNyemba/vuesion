import { spacingValidator, variationValidator } from '@/components/utils';
import { IItem } from '@/components/IItem';
import {
  IAnimationProps,
  IAsyncProps,
  ICalendarProps,
  ICollapseControlProps,
  IFormControlProps,
  IInputControlProps,
  IListControlProps,
  ISelectControlProps,
  ITextInputControlProps,
  IVariationProps,
  IVisibilityProps,
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
  value: { type: [String, Number, Boolean, Object], default: null },
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

export const VisibilityProps = (show = false): IVisibilityProps => ({
  show: { type: Boolean, default: show },
});

export const AsyncProps = (): IAsyncProps => ({
  loading: { type: Boolean, default: false },
});

export const CollapseControlProps = (): ICollapseControlProps => ({
  ...AnimationProps(),
  ...VisibilityProps(true),
});

export const CalendarProps = (): ICalendarProps => ({
  selectedDate: { type: Date, default: null },
  minDate: { type: Date, default: null },
  maxDate: { type: Date, default: null },
  firstDayOfWeek: { type: Number, default: 0 },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  today: { type: Date, default: () => new Date() },
});
