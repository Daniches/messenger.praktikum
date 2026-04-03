import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './chat-footer.hbs?raw';
import { InputField } from '@components/input-field/input-field';

export interface ChatFooterProps extends BlockOwnProps {}

export class ChatFooter extends Block <ChatFooterProps> {
  static componentName = "ChatFooter";
  protected template = template;
  
  protected events = {
    submit: (event: Event) => {
      event.preventDefault();

      let data: Record<string, string> = {};
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
