import { buffer } from "micro"
import * as admin from "firebase-admin"




// secure connection to firebase
const serviceAccount = require('../../../firebase/permission.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  }) : admin.app()


// connect to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session) => {
    return app
        .firestore()
        .collection('users')
        .doc(session.metadata.email)
        .collection('orders')
        .doc(session.id).
        set({
            amount: session.amount_total /100,
            images:  JSON.parse(session.metadata.images),
            email: session.metadata.email,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        })
        .then(() => console.log(`SUCCESS : ORDER ${session.id} ADDED`))
}


export default async (req, sec) => {
    const {method} = req

    if(method === 'POST'){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        // verify thatthe event came from stripe
        let event;
        try{
            event = stripe.webhooks.constructEvent(payload,sig, endpointSecret)
        }catch (err){
            res.status(400).send("Webhook error")
        }

        // handke the checkout completed
        if(event.type === 'checkout.session.completed'){
            const session = event.data.object

            // fulfill the order
            return await fulfillOrder(session).then(()=> res.status(200)).catch(err => res.status(400).send("Webhook error"))
        }
    }
}

export const config = {
    api: {
        bodyParser:false,
        externalResolver: true
    }
}