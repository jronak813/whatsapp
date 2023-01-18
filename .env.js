const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAEHs9UbShiOkL1NtHOEUPy7XamsZBAiw4tMUvUUdTipdsdTDr8hZBOF7oMc2Eo2ZBjVZBI2eZB9mphZB0Sxzg4sexetHE2KY90cAlaO63VFC3ciq8Ik7njFjowpBEZB2T5PVmFhSPfbZBRb5JXwVN2snDPZAPCcDkOZBVwYlarPP9O4UdYvrbF10oklAj4gJh1y0N4jQ3WBDiZB',
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
