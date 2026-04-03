import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './card-form.hbs?raw';

//TODO: придумать как лучше импортировать кнопки и инпуты с их пропсами
import type { ButtonProps } from '@components/button/button';
import type { InputFieldProps } from '@components/input-field/input-field';
import type { OutputFieldProps } from '@components/output-field/output-field';
import { InputField } from '@components/input-field/input-field';

export interface CardFormProps extends BlockOwnProps {
    ref: string,
    heading?: string,
    text?: string,
    avatar?: {
        type?: string,
        size?: string,
        clickable?: boolean,
    },
    buttons?: Array<ButtonProps | Array<ButtonProps>>,
    inputs?: Array<InputFieldProps | Array<InputFieldProps>>,
    outputs?: Array<OutputFieldProps | Array<OutputFieldProps>>,
}

export class CardForm extends Block <CardFormProps> {
  static componentName = "CardForm";
  protected template = template;

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();

      const data: Record<string, string> = {};
      for (const child of this.children) {
        if (child instanceof InputField) {

          const { name, value, validation } = child.getInputPropsForValidation();
          if (validation.regex.test(value)) {
            data[name] = value
          } else {
            return;
          }
        }
      }
      console.log(data);
    },
  };
}
