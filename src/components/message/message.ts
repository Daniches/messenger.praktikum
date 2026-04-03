import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './message.hbs?raw';

export interface MessageProps extends BlockOwnProps {
    my: boolean,
    message: string,
    time: string,
}

export class MessageItem extends Block <MessageProps> {
  static componentName = "MessageItem";
  protected template = template;
}
