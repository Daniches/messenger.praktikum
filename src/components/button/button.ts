import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './button.hbs?raw';

export interface ButtonProps extends BlockOwnProps {
    text: string,
    ref: string,
    type?: "submit" | "reset" | "button",
    variant?: "primary" | "secondary" | "tertiary",
    style?: "rounded" | "circle",
    icon?: string,
}

export class Button extends Block <ButtonProps> {
  static componentName = "Button";
  protected template = template;

  protected events = {
    click: (event: Event) => {
      event.preventDefault();
      console.log(this.props.text + " clicked");
    },
  };
}
