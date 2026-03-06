import Handlebars from "handlebars";

//import components
import button from './components/button/button.hbs?raw';


Handlebars.registerPartial('button', button);

//import pages
import auth from './pages/auth/auth.hbs?raw'


export default class App {
    constructor() {
        this.state = {
            currentPage: 'auth'
        };
        this.appElement = document.getElementById('app');
    }

    render() {
        let template;
        template = Handlebars.compile(auth);
        this.appElement.innerHTML = template({})
    }
}