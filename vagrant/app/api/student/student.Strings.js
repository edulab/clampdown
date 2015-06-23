'use strict';

var obj = {
    eng: {
        create: {
            usernameTaken: 'Username is already taken!',
            noData: 'Correct data was not propvided'
        },
        show: {
            usernameNotFound: 'The user was not found!'
        },
        update: {
            usernameNotFound: 'The user was not found!'
        },
        delete: {
            success: 'The user was deleted',
            usernameNotFound: 'The user was not found!'
        }
    }
};

exports.Messages = obj;