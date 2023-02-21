const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBADm94es0RJnS87QqZCAHktCYI8igbfkqfmj0NNrD6TDEnhdIy2hOMZCi0UMX7aJLQjmQruG4ph2WZBbC3NOgXpwqmdiETDyO8e1pByHC8FS7ob8mNTQI3nyOrJMZBkkwHA2SYOIARtyqEkR7KT6kBialGnZBrKZCaFHkfyZCSmkDYsrk3KJoZChl1HI988Gzn3QLSKY51tRE',
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
