const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAGRu5MgbsRMac98KlClphfd1cXcy46G2h7RVHtVssufMJVszX8elw6CN9Yzc5hKvdaF3zip2L6nf6dDxKQa7ZAxZA2SyjXKyFZCTGxZBrDZC8ZAZA35VSVDZBUPP4TEOkPslWxK6xSzZB5bkmuoA2wqtBgM2At2ZBi7bcTeenMO5tEQextIpcfOEVWmhfrrg1VqUf4NTVndlaa',
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
