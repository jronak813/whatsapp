const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBANqXlDNtldJOn2vDZBgMSThOg9XMh1ik7y3ZACoIKmeNCUYPosNTeB4ozuBhYvNTMDDLbmJf2JFkylf50en90N06mZBeGp9n32xWXkNtxQbKAq2j1MHRpS2e4eJavRLQsqNeGAD8ZCm6vePqpJj5UZAJycbPnUhcBrOHjq3NBgdqKPGMxdkpZCEyREoCtNIkEuLIv3EZC65',
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
