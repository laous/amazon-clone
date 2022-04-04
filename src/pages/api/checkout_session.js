const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const {items , email} = req.body
    const transformedItems = items.map( item => ({
        description: item.description,
        quantity:1,
        price_data:{
            unit_amount: item.price*100,
            currency: 'gbp',      
            product_data:{
                name:item.title,
                images :[item.image],
            },
        },     
    }))

    const session = await stripe.checkout.sessions.create({
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/canceled`,
        shipping_address_collection:{
            allowed_countries:['GB', 'US']
        },
        payment_method_types:["card"],
        line_items:transformedItems,
        mode:'payment',
        metadata:{
            email,
            images:JSON.stringify(items.map(item => item.image))
        }

    })

    res.status(200).json({id:session.id})


}