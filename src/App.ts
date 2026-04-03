import Handlebars from 'handlebars';
import './helpers/handlebarsHelpers';
import {registerComponent} from '@components/registerComponent';

import { Button } from '@components/button';
registerComponent(Button);

import { InputField } from '@components/input-field';
registerComponent(InputField);

import { OutputField } from '@components/output-field';
registerComponent(OutputField);

import { CardForm } from '@components/card-form';
registerComponent(CardForm);

import { ChatItem } from '@components/chat-item';
registerComponent(ChatItem);

import { ChatFooter } from '@components/chat-footer';
registerComponent(ChatFooter);

import { MessageItem } from '@components/message';
registerComponent(MessageItem);

import { AuthPage, authFormData } from './pages/auth';
registerComponent(AuthPage);

import { RegisterPage, registerFormData } from './pages/register';
registerComponent(RegisterPage);


import { ChatPage, chatFormData } from './pages/chat';
registerComponent(ChatPage);

import {
    ProfilePage,
    profileData,
    ProfileEditDataPage,
    profileEditDataFormData,
    ProfileEditPasswordPage,
    profileEditPasswordFormData,
} from './pages/profile';
registerComponent(ProfilePage);
registerComponent(ProfileEditDataPage);
registerComponent(ProfileEditPasswordPage);

import { Error404Page, error404FormData } from './pages/404';
registerComponent(Error404Page);

import { Error505Page, error505FormData } from './pages/505';
registerComponent(Error505Page);

import button from './components/button/button.hbs?raw';
import icon from './components/icon/icon.hbs?raw';
import inputField from './components/input-field/input-field.hbs?raw';
import outputField from './components/output-field/output-field.hbs?raw';
import navigationFooter from './components/navigation-footer/navigation-footer.hbs?raw';
import navigationFooterLink from './components/navigation-footer/navigation-footer__link.hbs?raw';
import navigationHeader from './components/navigation-header/navigation-header.hbs?raw';
import avatar from './components/avatar/avatar.hbs?raw';
import chatHeader from './components/chat-header';
import chatList from './components/chat-list/index.ts';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('icon', icon);
Handlebars.registerPartial('input-field', inputField);
Handlebars.registerPartial('output-field', outputField);
Handlebars.registerPartial('navigation-footer', navigationFooter);
Handlebars.registerPartial('navigation-footer-link', navigationFooterLink);
Handlebars.registerPartial('navigation-header', navigationHeader);
Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('chat-header', chatHeader);
Handlebars.registerPartial('chat-list', chatList);

export default class App {
    private state: {
        currentPage: string;
    };

    private appElement: HTMLElement | null;

    constructor() {
        this.state = {
            currentPage: 'auth'
        };
        this.appElement = document.getElementById('app');
    }

    render() {
        let page, pageElement;
        switch (this.state.currentPage){
            case 'auth':
                page = new AuthPage(authFormData);
                pageElement = page.element();
                break;
            case 'register':
                page = new RegisterPage(registerFormData);
                pageElement = page.element();
                break;
            case 'chat':
                page = new ChatPage(chatFormData);
                pageElement = page.element();
                break;
            case 'profile':
                page = new ProfilePage(profileData);
                pageElement = page.element();
                break;
            case 'profile-edit-data':
                page = new ProfileEditDataPage(profileEditDataFormData);
                pageElement = page.element();
                break;
            case 'profile-edit-password':
                page = new ProfileEditPasswordPage(profileEditPasswordFormData);
                pageElement = page.element();
                break;
            case '404':
                page = new Error404Page(error404FormData);
                pageElement = page.element();
                break;
            case '505':
                page = new Error505Page(error505FormData);
                pageElement = page.element();
                break;
            default:
                page = new Error404Page(error404FormData);
                pageElement = page.element();
                break;
        };
        if (this.appElement && pageElement) {
            this.appElement.innerHTML = '';
            this.appElement.appendChild(pageElement);
        }
        this.attachEventListeners();
    }

    changePage(page: string) {
        this.state.currentPage = page;
        this.render();
    }

    attachEventListeners() {
        const navigationLinks = document.querySelectorAll('.navigation-footer__link');
        navigationLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.currentTarget as HTMLElement | null;
                const nextPage = target?.dataset.page;

                if (nextPage) {
                    this.changePage(nextPage);
                }
            });
        });
    }
}
