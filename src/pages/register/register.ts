import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './register.hbs?raw';

export const registerFormData = {
  ref: 'register-form',
  heading: 'Регистрация',
  inputs: [
    [
      { label: 'Имя', ref: 'input-first-name', name: 'first_name', type: 'text', id: 'user-firstname' },
      { label: 'Фамилия', ref: 'input-second-name', name: 'second_name', type: 'text', id: 'user-secondname' },
    ],
    { label: 'Логин', ref: 'input-login', name: 'login', type: 'text', id: 'user-login' },
    { label: 'Email', ref: 'input-email', name: 'email', type: 'email', id: 'user-email' },
    { label: 'Телефон', ref: 'input-phone', name: 'phone', type: 'tel', id: 'user-phone' },
    { label: 'Пароль', ref: 'input-password', name: 'password', type: 'password', id: 'user-password' },
  ],
  buttons: [
    { text: 'Зарегистрироваться', ref: 'button-register', type: 'submit', variant: 'primary' },
    { text: 'Уже есть аккаунт?', ref: 'button-have-account', type: 'button', variant: 'tertiary' },
  ],
};

interface FormProps extends BlockOwnProps {
  [key: string]: unknown;
}

export class RegisterPage extends Block<FormProps> {
  static componentName = 'RegisterPage';
  protected template = template;
}
