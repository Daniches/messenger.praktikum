import Block from '@components/Block';
import template from './404.hbs?raw';
import type { CardFormProps } from '@components/card-form/card-form';

interface PageProps extends CardFormProps {}

export const error404FormData = {
    ref: "404-page",
    heading: "404",
    text: "Ой, а тут, кажется, ничего нет",
    buttons: [
        {text: "Вернуться", ref: "button-return"},
    ],
} satisfies PageProps;

export class Error404Page extends Block <PageProps> {
    static componentName = "Error404Page";
    protected template = template;
}
