import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './auth.hbs?raw';

export const authFormData = {
    ref: "hey",
    heading: "Авторизация",
    inputs: [
        {label: "Логин", ref: "input-login", name: "login", type: "text", validationRegex: /^([A-ZА-ЯЁ][a-zа-яё]*)(-[A-ZА-ЯЁ][a-zа-яё]*)*$/u, errorMessage: "Некорректный логин"},
        {label: "Пароль", ref: "input-password", name: "password", type:"password", validationRegex: /^([A-ZА-ЯЁ][a-zа-яё]*)(-[A-ZА-ЯЁ][a-zа-яё]*)*$/u, errorMessage: "Некорректный пароль"},
    ],
    buttons: [
        {text: "Войти", ref: "button-login", type: "submit"},
    ],
};

interface FormProps extends BlockOwnProps {
    [key: string]: unknown;
}

export class AuthPage extends Block <FormProps> {
    static componentName = "AuthPage";
    protected template = template;
}
