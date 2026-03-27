import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './auth.hbs?raw';

export const authFormData = {
    ref: "hey",
    heading: "Авторизация",
    inputs: [
        {label: "Логин", ref: "input-login", name: "login", type: "text"},
        {label: "Пароль", ref: "input-password", name: "password", type:"password"},
    ],
    buttons: [
        {text: "Войти", ref: "button-login", type: "submit"},
    ],
};

interface FormProps extends BlockOwnProps {
    data;
}

export class AuthPage extends Block <FormProps> {
    static componentName = "AuthPage";
    protected template = template;
}
