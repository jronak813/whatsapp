const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAG3UmVdBRzZCtlOoJjg5i0Sq3If7k4lRxfz1ZCMbYcIdN8vt8bLKHLQTz4wHtBAvq1N8MCKlUwAnH7pZBIgIGMKavJskje2wcIauO5PZBavTuZCovLUZCdDzl7iewxEAYw1UfHyCHRNRxh8AyebXGAedD0Um77Ir6WLDabP2pOByTcK2PCO9cqZCl3EpBJhDLLeLPmInk2n',
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
