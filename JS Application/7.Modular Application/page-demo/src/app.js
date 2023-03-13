import {page} from './lib.js';
import { render} from '../node_modules/lit-html/lit-html.js';


import { notFound } from './notFound.js';
import { showAbout } from './views/about.js';
import { showCreate } from './views/create.js';
import { showCatalog } from './views/catalog.js';
import { showContact } from './views/contact.js';
import { showHome } from './views/home.js';
import { showDetails } from './views/details.js';

function decorateContent(ctx, next){
    ctx.render = function(content){
        render(content, document.querySelector('main'));
    };
    next();
};

function parseQuery(ctx, next){
    ctx.query = {};

    if(ctx.querystring){
        const query = Object.fromEntries(ctx.querystring
            .split('&')
            .map(e => e.split('=')));
            Object.assign(ctx.query, query);
    };

    next();
}

page(decorateContent);
page(parseQuery);
page('/index.html', '/');
page('/', showHome);
page('/recipes', showCatalog);
page('/create', showCreate);
page('/recipes/:id', showDetails);
page('/about', showAbout);
page('/contact*', showContact);
page('*', notFound);


page.start();