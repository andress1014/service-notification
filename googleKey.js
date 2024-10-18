const fetch = require('node-fetch'); // Esto funcionará si usas la versión 2
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/firebase.messaging'];

function getAccessToken() {
    return new Promise(function(resolve, reject) {
        const key = require('./keyAuth.json');
        const jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function(err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            console.log(tokens.access_token)

            resolve(tokens.access_token);
        });
    });
}

getAccessToken();
