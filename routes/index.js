'use strict';
const router = require('express').Router();

const WhatsappCloudAPI = require('whatsappcloudapi_wrapper');
const axios = require('axios');

const Whatsapp = new WhatsappCloudAPI({
    accessToken: process.env.Meta_WA_accessToken,
    senderPhoneNumberId: process.env.Meta_WA_SenderPhoneNumberId,
    WABA_ID: process.env.Meta_WA_wabaId,
});

const EcommerceStore = require('./../utils/ecommerce_store.js');
let Store = new EcommerceStore();
const CustomerSession = new Map();

router.get('/meta_wa_callbackurl', (req, res) => {
    try {
        console.log('GET: Someone is pinging me!');

        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];
        console.log('req.query', req.query, process.env.Meta_WA_VerifyToken);
        if (
            mode &&
            token &&
            mode === 'subscribe' &&
            process.env.Meta_WA_VerifyToken === token
        ) {
            return res.status(200).send(challenge);
        } else {
            return res.sendStatus(403);
        }
    } catch (error) {
        console.error({ error });
        return res.sendStatus(500);
    }
});

router.post('/meta_wa_callbackurl', async (req, res) => {
    console.log('POST: Someone is pinging me!');
    try {
        let data = Whatsapp.parseMessage(req.body);
        console.log('***************************req.body', req.body);
        console.log('***********************response from whatsapp', data);
        if (data?.isMessage) {
            let incomingMessage = data.message;
            let recipientPhone = incomingMessage.from.phone; // extract the phone number of sender
            let recipientName = incomingMessage.from.name;
            let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
            let message_id = incomingMessage.message_id; // extract the message id

            if (typeOfMsg === 'text_message') {
                await Whatsapp.sendSimpleButtons({
                    message: `Hey ${recipientName}, \nYou are speaking to a chatbot.\nPlease select product variant?`,
                    recipientPhone: recipientPhone,
                    listOfButtons: [
                        {
                            title: 'Cognition',
                            id: 'cognition',
                        },
                        {
                            title: 'Insider',
                            id: 'insider',
                        },
                        {
                            title: 'Whatnext',
                            id: 'whatnext',
                        },
                    ],
                });
            }

            await Whatsapp.markMessageAsRead({
                message_id,
            });
        }

        return res.sendStatus(200);
    } catch (error) {
        console.error({ error });
        return res.sendStatus(500);
    }
});

module.exports = router;
