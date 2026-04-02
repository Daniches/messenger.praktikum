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
    value?: string,
    errorMessage?: string,
    validationRegex?: RegExp,
}

export class InputField extends Block <InputFieldProps> {
  static componentName = "InputField";
  protected template = template;

  protected events = {
    keyup: () => {
      this.props.value = (this.refs['field'] as HTMLInputElement).value;
    },
    focusout: () => {
      if (this.props.value && this.props.validationRegex && this.props.errorMessage) {
        if (!this.props.validationRegex.test(this.props.value)) {
          this.props.alert = this.props.errorMessage;
        } else {
          this.props.alert = undefined;
        }
        this.render();
      }
    },
  };
}
