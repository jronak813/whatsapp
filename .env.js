const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAI8WKetLLvasH36QaLBVRi7xSZAelO6h7SIv0ZCZCxvlZCZA9k0LLLXaaUDR5MhfMEYMMib7vOKtOPBQuqh20ZAHK8PAU5CeIfExI7akATIDlSSEljet9Ayx4FAI2f24TxL1JPCKBI9jClR9YiGjGZCBniAE2KJkhl6KZBb75x6OwKBt4ZCTU4BfFQHZCPwiOdQrdu3zk9C8Q4',
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
