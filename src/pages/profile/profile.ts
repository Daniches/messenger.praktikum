import Block from '@components/Block';
import profileTemplate from './profile.hbs?raw';
import profileEditDataTemplate from './profile-edit-data.hbs?raw';
import profileEditPasswordTemplate from './profile-edit-password.hbs?raw';
import type { CardFormProps } from '@components/card-form/card-form';
import rules from '@utils/validation-rules';

interface PageProps extends CardFormProps {
  pageName: string;
}

export const profileData = {
  ref: 'profile-form',
  pageName: 'Данные профиля',
  avatar: {
    type: 'text',
    size: 'big',
    clickable: true,
  },
  outputs: [
    [
      { ref: 'output-first-name', name: 'first_name', label: 'Имя', id: 'user-firstname', value: 'Михаил' },
      { ref: 'output-second-name', name: 'second_name', label: 'Фамилия', id: 'user-secondname', value: 'Мишкин' },
    ],
    { ref: 'output-login', name: 'login', label: 'Логин', id: 'user-name', value: 'my_login' },
    { ref: 'output-email', name: 'email', label: 'Email', id: 'user-email', value: 'test@mail.ru' },
    { ref: 'output-phone', name: 'phone', label: 'Телефон', id: 'user-phone', value: '+7 (123) 456-78-90' },
  ],
  buttons: [
    [
      { text: 'Изменить данные', ref: 'button-edit-data', variant: 'secondary' },
      { text: 'Обновить пароль', ref: 'button-edit-password', variant: 'secondary' },
    ],
    { text: 'Выйти', ref: 'button-logout', variant: 'tertiary' },
  ],
} satisfies PageProps;

export const profileEditDataFormData = {
  ref: 'profile-edit-data-form',
  pageName: 'Изменить данные',
  inputs: [
    [
      { label: 'Имя', ref: 'input-first-name', name: 'first_name', type: 'text' as const, id: 'user-firstname', value: 'Михаил', validation: rules.name },
      { label: 'Фамилия', ref: 'input-second-name', name: 'second_name', type: 'text' as const, id: 'user-secondname', value: 'Мишкин', validation: rules.name },
    ],
    { label: 'Логин', ref: 'input-login', name: 'login', type: 'text' as const, id: 'user-login', value: 'my_login', validation: rules.login },
    { label: 'Email', ref: 'input-email', name: 'email', type: 'email' as const, id: 'user-email', value: 'test@mail.ru', validation: rules.email },
    { label: 'Телефон', ref: 'input-phone', name: 'phone', type: 'tel' as const, id: 'user-phone', value: '+7 (123) 456-78-90', validation: rules.phone },
  ],
  buttons: [
    { text: 'Сохранить', ref: 'button-save', type: 'submit' as const, variant: 'primary' as const },
    { text: 'Отмена', ref: 'button-cancel', variant: 'tertiary' as const },
  ],
} satisfies PageProps;

export const profileEditPasswordFormData = {
  ref: 'profile-edit-password-form',
  pageName: 'Обновить пароль',
  inputs: [
    { label: 'Текущий пароль', ref: 'input-old-password', name: 'old_password', type: 'password', id: 'user-old-password', validation: rules.password },
    { label: 'Новый пароль', ref: 'input-new-password', name: 'new_password', type: 'password', id: 'user-password', validation: rules.password },
    { label: 'Повторите пароль', ref: 'input-repeat-password', name: 'new_password_repeat', type: 'password', id: 'user-password-repeat', validation: rules.password },
  ],
  buttons: [
    { text: 'Сохранить', ref: 'button-save', type: 'submit' as const, variant: 'primary' as const },
    { text: 'Отмена', ref: 'button-cancel', variant: 'tertiary' as const },
  ],
} satisfies PageProps;

export class ProfilePage extends Block<PageProps> {
  static componentName = 'ProfilePage';
  protected template = profileTemplate;
}

export class ProfileEditDataPage extends Block<PageProps> {
  static componentName = 'ProfileEditDataPage';
  protected template = profileEditDataTemplate;
}

export class ProfileEditPasswordPage extends Block<PageProps> {
  static componentName = 'ProfileEditPasswordPage';
  protected template = profileEditPasswordTemplate;
}
