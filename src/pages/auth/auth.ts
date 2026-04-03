import Block from '@components/Block';
import template from './auth.hbs?raw';
import rules from '@utils/validation-rules';
import type { CardFormProps } from '@components/card-form/card-form';

type PageProps = CardFormProps

export const authFormData = {
    ref: "hey",
    heading: "Авторизация",
    inputs: [
        {label: "Логин", ref: "input-login", name: "login", type: "text" as const, validation: rules.login},
        {label: "Пароль", ref: "input-password", name: "password", type:"password" as const, validation: rules.password},
    ],
    buttons: [
        {text: "Войти", ref: "button-login", type: "submit" as const},
    ],
} satisfies PageProps;

export class AuthPage extends Block <PageProps> {
    static componentName = "AuthPage";
    protected template = template;
}
