const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBACKlcvB3i40SYwYleyyZCs3F4JfVBLNUuljMpOoFKXUUK0uxEcbYTgcrdXLSZCoQLrBxV2ej0LSpHha3myMiFeGpc6TYZBGEdQkl6H4xxX5mc1t8bv4yT0rHMPEK91cZButQ3ZAhm9kNZAdtW4KQGWALDpuDAAUaUS6eNIFq5RDisKEX4nLCJWeIhpfrcQROHZAClZBe1zBW',
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
