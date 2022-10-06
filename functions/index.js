const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require ("stripe")("sk_test_51LP5LNSESBDYP8LKVDZEe819knsNyHUE2ipAAUxaRNNdVvb0Sc43OcNstpeaYEyxXa8UhPTO1PQobXDE564AR2zW009cTybSQ5")


//API



//API CONFIG
const app =express();


//-MiddleWare
app.use(cors({ origin: true}));
app.use(express.json());


//-API routes
app.get('/',(request, response) => response.status(200).send('Hello world'))
app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('payment Request REceived >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//- Listen command

exports.api = functions.https.onRequest(app)