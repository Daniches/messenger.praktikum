import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './card-form.hbs?raw';

//TODO: придумать как лучше импортировать кнопки и инпуты с их пропсами
import type { ButtonProps } from '@components/button/button';
import type { InputFieldProps } from '@components/input-field/input-field';

interface CardFormProps extends BlockOwnProps {
    ref: string,
    heading?: string,
    text?: string,
    buttons?: Array<ButtonProps | Array<ButtonProps>>,
    inputs?: Array<InputFieldProps | Array<InputFieldProps>>,
}

export class CardForm extends Block <CardFormProps> {
  static componentName = "CardForm";
  protected template = template;
}
