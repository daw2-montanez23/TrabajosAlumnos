// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


import { home } from "./vistas/home.js";
import { header } from "./componentes/header.js";
import { footer } from "./componentes/footer.js";

document.querySelector('main').innerHTML = home.template
document.querySelector('header').innerHTML = header.template
document.querySelector('footer').innerHTML = footer.template
