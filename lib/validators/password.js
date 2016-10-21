'use strict';

module.exports = value => {
    return /^((?=\S*?[a-zA-Z])(?=\S*?[0-9]).{5,})\S$/.test(value);
};
