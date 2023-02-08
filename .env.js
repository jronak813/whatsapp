const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAJZAwpFYvVBlQmYYNrZAuBPViYaU6qY68sWFhdXBxaCwOcZBA1C7ySCFmJSXpJrTcqh4jfZAgM70hg9bgVRMMbZA1nGvhuLFk6eFL1qFBNvUxXgZBm00kDmwp9ZBrwDY5lFXqTDEOjnC6eRyZCJZATP7LH6V5hzau8UJD3hZBfkdl9ZCeJAqTVttrsFzX8uDnVelKcMkhZC3JUGE',
    Meta_WA_SenderPhoneNumberId: '101580936177175',
    Meta_WA_wabaId: '104193235911486',
    Meta_WA_VerifyToken: '12345',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    return development;
    // if (environment === 'production') {
    //     return production;
    // } else if (environment === 'development') {
    //     return development;
    // } else {
    //     return fallback;
    // }
};
