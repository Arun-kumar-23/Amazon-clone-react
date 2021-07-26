const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51JH1ZfSD0gvhhDzXYTJ2911A1BhOwsgWLXYTsJU8AqjzQdETESYnyA14U6K6htRgVhXw1l1DKeF0gDM15NgCwibp00TEWFPUm1')

const app = express()

app.use(cors({origin: true}))
app.use(express.json())

app.get('/', (request, response)=>response.status(200).send('hello world'))

app.post('/payments/create', async(request, response)=>{
    const total = request.query.total

    console.log('Payment RequestRecieved BOOM!!! for this amount>>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"inr"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})



exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-re  act-c0d3a/us-central1/api