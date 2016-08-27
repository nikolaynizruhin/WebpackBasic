'use strict';

import welcome from './welcome';

if (NODE_ENV == 'development') {
    console.log(welcome);
}

welcome('Home');

exports.welcome = welcome;