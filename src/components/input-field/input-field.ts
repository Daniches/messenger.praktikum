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
    placeholder?: string,
    validation?: {
        regex: RegExp,
        errorMessage: string,
    }
}

export class InputField extends Block <InputFieldProps> {
  static componentName = "InputField";
  protected template = template;

  public getInputPropsForValidation(): { name: string; value: string; validation: { regex: RegExp; errorMessage: string } } {
    return {
      name: this.props.name ?? '',
      value:  this.props.value ?? '',
      validation: this.props.validation ?? { regex: /./, errorMessage: '' },
    };
  }

  protected events = {
    keyup: () => {
      this.props.value = (this.refs['field'] as HTMLInputElement).value;
    },
    focusout: () => {
      if (this.props.validation) {
        if (!this.props.validation.regex.test(this.props.value ?? '')) {
          this.props.alert = this.props.validation.errorMessage;
        } else {
          this.props.alert = undefined;
        }
        this.render();
      }
    },
  };
}
