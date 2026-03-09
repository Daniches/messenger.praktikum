import Handlebars from 'handlebars';
import './helpers/handlebarsHelpers';


import button from './components/button/button.hbs?raw';
import icon from './components/icon/icon.hbs?raw';
import inputField from './components/input-field/input-field.hbs?raw';
import outputField from './components/output-field/output-field.hbs?raw';
import navigationFooter from './components/navigation-footer/navigation-footer.hbs?raw';
import navigationFooterLink from './components/navigation-footer/navigation-footer__link.hbs?raw';
import navigationHeader from './components/navigation-header/navigation-header.hbs?raw';
import avatar from './components/avatar/avatar.hbs?raw';

import auth from './pages/auth/auth.hbs?raw';
import register from './pages/register/register.hbs?raw';
import page404 from './pages/404/404.hbs?raw';
import page505 from './pages/505/505.hbs?raw';
import chat from './pages/chat/chat.hbs?raw';
import profile from './pages/profile/profile.hbs?raw';
import profileEditData from './pages/profile/profile-edit-data.hbs?raw';
import profileEditPassword from './pages/profile/profile-edit-password.hbs?raw';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('icon', icon);
Handlebars.registerPartial('input-field', inputField);
Handlebars.registerPartial('output-field', outputField);
Handlebars.registerPartial('navigation-footer', navigationFooter);
Handlebars.registerPartial('navigation-footer-link', navigationFooterLink);
Handlebars.registerPartial('navigation-header', navigationHeader);
Handlebars.registerPartial('avatar', avatar);



export default class App {
    constructor() {
        this.state = {
            currentPage: 'auth'
        };
        this.appElement = document.getElementById('app');
    }

    render() {
        let template;
        switch (this.state.currentPage){
            case 'auth':
                template = Handlebars.compile(auth);
                break;
            case 'register':
                template = Handlebars.compile(register);
                break;
            case 'chat':
                template = Handlebars.compile(chat);
                break;
            case 'profile':
                template = Handlebars.compile(profile);
                break;
            case 'profile-edit-data':
                template = Handlebars.compile(profileEditData);
                break;
            case 'profile-edit-password':
                template = Handlebars.compile(profileEditPassword);
                break;
            case '404':
                template = Handlebars.compile(page404);
                break;
            case '505':
                template = Handlebars.compile(page505);
                break;
            default:
                template = Handlebars.compile(page404);
                break;
        };
        this.appElement.innerHTML = template({})
        this.attachEventListeners();
    }

    changePage(page) {
        this.state.currentPage = page;
        this.render();
    }

    attachEventListeners() {
        const navigationLinks = document.querySelectorAll('.navigation-footer__link');
        navigationLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.changePage(e.target.dataset.page);
            });
        });
    }
}