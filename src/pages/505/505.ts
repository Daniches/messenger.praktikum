import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './505.hbs?raw';

export const error505FormData = {
    ref: "505-page",
    heading: "505",
    text: "Мы уже работаем над проблемой",
    buttons: [
        {text: "Вернуться", ref: "button-return"},
    ],
};

interface FormProps extends BlockOwnProps {
    data;
}

export class Error505Page extends Block <FormProps> {
    static componentName = "Error505Page";
    protected template = template;
}
