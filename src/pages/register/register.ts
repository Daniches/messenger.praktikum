import Block from '@components/Block';
import template from './register.hbs?raw';
import type { CardFormProps } from '@components/card-form/card-form';
import rules from '@utils/validation-rules';

type PageProps = CardFormProps

export const registerFormData = {
  ref: 'register-form',
  heading: 'Регистрация',
  inputs: [
    [
      { label: 'Имя', ref: 'input-first-name', name: 'first_name', type: 'text' as const, id: 'user-firstname', validation: rules.name },
      { label: 'Фамилия', ref: 'input-second-name', name: 'second_name', type: 'text' as const, id: 'user-secondname', validation: rules.name },
    ],
    { label: 'Логин', ref: 'input-login', name: 'login', type: 'text' as const, id: 'user-login', validation: rules.login },
    { label: 'Email', ref: 'input-email', name: 'email', type: 'email' as const, id: 'user-email', validation: rules.email },
    { label: 'Телефон', ref: 'input-phone', name: 'phone', type: 'tel' as const, id: 'user-phone', validation: rules.phone },
    { label: 'Пароль', ref: 'input-password', name: 'password', type: 'password' as const, id: 'user-password', validation: rules.password },
  ],
  buttons: [
    { text: 'Зарегистрироваться', ref: 'button-register', type: 'submit' as const, variant: 'primary' as const },
    { text: 'Уже есть аккаунт?', ref: 'button-have-account', type: 'button' as const, variant: 'tertiary' as const },
  ],
} satisfies PageProps;

export class RegisterPage extends Block<PageProps> {
  static componentName = 'RegisterPage';
  protected template = template;
}
