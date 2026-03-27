import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './input-field.hbs?raw';

export interface InputFieldProps extends BlockOwnProps {
    ref: string,
    label?: string,
    type?: "text" | "email" | "tel" | "password",
    id?: string,
    name?: string,
    alert?: string,
    autocomplete?: string,
    value?: string
}

export class InputField extends Block <InputFieldProps> {
  static componentName = "InputField";
  protected template = template;
}
