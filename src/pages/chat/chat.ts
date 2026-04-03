import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './chat.hbs?raw';
import rules from '@utils/validation-rules';

export const chatFormData = {
  ref: 'chat-form',
  heading: 'Заглушка чатов',
  text: 'Тут будут находиться чаты',
  chatItems: [
    {
      user: 'Семен Семеныч',
      message: 'Привет! Как дела?',
      time: '12:00',
      avatar: {
        type: 'text',
        img: '/images/avatars/avatar.jpg',
        text: 'CC',
      },
    },
    {
      user: 'Иван Иванов',
      message: 'Сколько же будет 2 + 2?',
      time: '11:00',
      unreadMessages: 1,
      avatar: {
        type: 'img',
        img: '/images/avatars/avatar.jpg',
      },
    },
  ],
  messages: [
    {
      my: true,
      message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
      time: '11:01',
    },
    {
      my: true,
      message: 'Так и не понял, что это...',
      time: '11:02',
    },
    {
      my: false,
      message: 'Ну это обалдеть!',
      time: '11:03',
    },
    {
      my: false,
      message: 'Привет! Как дела?',
      time: '12:00',
    },
  ],
  messageValidation: rules.message,
};

interface FormProps extends BlockOwnProps {
  [key: string]: unknown;
}

export class ChatPage extends Block<FormProps> {
  static componentName = 'ChatPage';
  protected template = template;
}
