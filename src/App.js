import Handlebars from "handlebars";

//import components
import button from './components/button/button.hbs?raw';
import inputField from './components/input-field/input-field.hbs?raw';
import navigationFooter from './components/navigation-footer/navigation-footer.hbs?raw';
import navigationFooterLink from './components/navigation-footer/navigation-footer__link.hbs?raw';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('input-field', inputField);
Handlebars.registerPartial('navigation-footer', navigationFooter);
Handlebars.registerPartial('navigation-footer-link', navigationFooterLink);

Handlebars.registerHelper("parameter", function (parametr, value, options) {
    if (value) {
        return new Handlebars.SafeString(`${Handlebars.escapeExpression(parametr)}="${Handlebars.escapeExpression(value)}"`);
    }
    return '';
});

//import pages
import auth from './pages/auth/auth.hbs?raw';
import register from './pages/register/register.hbs?raw';


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
            default:
                template = Handlebars.compile(auth);
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