import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './chat-item.hbs?raw';

export interface ChatItemProps extends BlockOwnProps {
    user: string,
    message: string,
    avatar: {
        type: string,
        img?: string,
        text?: string,
    },
    time: string,
    unreadMessages?: number,
}

export class ChatItem extends Block <ChatItemProps> {
  static componentName = "ChatItem";
  protected template = template;
}
