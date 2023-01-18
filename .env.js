const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAIMWcZCtnWNBhspG7vGcDUNW5CPYxAvl6WqaiB1OUMMUKvXrEwtDXgZAi8TdWUYtFRhZBXZC6Lj3r3vHNx3ZArzZCucohNML96SPkIZBcHkvAn8J3m2wf636VgBeGODtXgdoRSZCOtbTQuhZBXpZAUTDTJNmegOqzqkaB1wCbOliZAp7ZC7ZBvJgbSZBBNghSJ6lUGFAQWYFkhrJoD',
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
