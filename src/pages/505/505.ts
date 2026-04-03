import Block from '@components/Block';
import template from './505.hbs?raw';
import type { CardFormProps } from '@components/card-form/card-form';

type PageProps = CardFormProps

export const error505FormData = {
    ref: "505-page",
    heading: "505",
    text: "Мы уже работаем над проблемой",
    buttons: [
        {text: "Вернуться", ref: "button-return"},
    ],
} satisfies PageProps;

export class Error505Page extends Block <PageProps> {
    static componentName = "Error505Page";
    protected template = template;
}
