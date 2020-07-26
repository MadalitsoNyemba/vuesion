import { PropOptions } from '@vue/composition-api';

export interface IFormControlProps {
  disabled: PropOptions;
}

export interface IInputControlProps extends IFormControlProps {
  id: PropOptions;
  label: PropOptions;
  name: PropOptions;
  required: PropOptions;
  validation: PropOptions;
  value: PropOptions;
}

export interface ITextInputControlProps extends IInputControlProps {
  placeholder: PropOptions;
  autofocus: PropOptions;
  type: PropOptions;
  readonly: PropOptions;
  description: PropOptions;
  errorMessage: PropOptions;
  autocomplete: PropOptions;
}

export interface IListControlProps {
  items: PropOptions;
}

export interface ISelectControlProps extends IListControlProps {
  multiSelect: PropOptions;
}

export interface IVariationProps {
  color: PropOptions;
  size: PropOptions;
}

export interface IAnimationProps {
  duration: PropOptions;
}

export interface IVisibilityProps {
  show: PropOptions;
}

export interface IAsyncProps {
  loading: PropOptions;
}

export interface ICollapseControlProps extends IAnimationProps, IVisibilityProps {}

export interface ICalendarProps {
  selectedDate: PropOptions;
  today: PropOptions;
  minDate: PropOptions;
  maxDate: PropOptions;
  firstDayOfWeek: PropOptions;
  startDate: PropOptions;
  endDate: PropOptions;
}
