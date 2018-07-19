// /* eslint "no-console": off */
const createError = require('http-errors');
const _ = require('lodash');
const basicauth = require('basic-auth');

export function basicAuth(req, res, next) {
    let {name= undefined, pass= undefined} = _.toPlainObject(basicauth(req));
    if (name === 'spark' && pass === 'testing1') {
        return next();
    }
    return next(createError(401, 'Please login to view this page.'));
}