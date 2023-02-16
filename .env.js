const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAGY3hG7gwnQLEpoTB09tq3cGGB6uVG58JkwR01DFlRiVVqfAsZB9zST3VB8aNI88s4yajIze1vTpzLloH8F3DYQDSaUhX6lVE3n9CtNqUSeluDV9mygpWnu10W1d5ZBMfQ574Jv1lH53wspdOq1g72HqiHItP9H6KKLlBdJxk3uGZACWfQ6VmrVnryA3PHezjmrTmqA',
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
