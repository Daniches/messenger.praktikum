import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './404.hbs?raw';

export const error404FormData = {
    ref: "404-page",
    heading: "404",
    text: "Ой, а тут, кажется, ничего нет",
    buttons: [
        {text: "Вернуться", ref: "button-return"},
    ],
};

interface FormProps extends BlockOwnProps {
    data;
}

export class Error404Page extends Block <FormProps> {
    static componentName = "Error404Page";
    protected template = template;
}
