import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './chat.hbs?raw';

export const chatFormData = {
  ref: 'chat-form',
  heading: 'Заглушка чатов',
  text: 'Тут будут находиться чаты',
};

interface FormProps extends BlockOwnProps {
  [key: string]: unknown;
}

export class ChatPage extends Block<FormProps> {
  static componentName = 'ChatPage';
  protected template = template;
}
