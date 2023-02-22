const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAPytZAtCxJBvkXQZAKaeOto9zvQSRZCvTib5MJZBZC1YgPWDZBxhRHF0CwZAYRhRZCaROcm0D3oUqbpnuq5XaPnuIJsNVTGya9EnHU5m4VdgM7hTm3LxByboF9ItEiaOYLf0VXqVqANMLvypyd1gnWjX7myQDmvFoHBBf4OX2z6EDqGJ3U7qiP9DdrfgrRF6kjy1QMaEicVA',
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
