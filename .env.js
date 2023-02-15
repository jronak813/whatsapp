const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBACnzSQT3ZAqGsdyWuX6V2YZAXaByIZAqifMIYpXl3wOjF0gkW7bmtJmxvYT2juwb1GSSyvhNjz4EE8n6P6mXpvgNknydrn6APZCZAC6oZCD5GjSwwXFiv6eraxAe20uyHQCZAObonqBotUYLAALGZBlDvlR0Yw32LgPOIJOBvhoEtfrZAdOApWxzb8ZBr39Nf09fZBRSgnfrhoZB',
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
