require('dotenv').config()
const express = require("express");
const port = 3001
const app = express();


const {STRIPE_PUBLISH, STRIPE_SECRET} = process.env
const stripe = require("stripe")(STRIPE_SECRET);

app.use(express.json())

app.post("/charge", async(req, res) => {
    console.log(req.body)
    try {
        let {status} = await stripe.charges.create({
          amount: 2000,
          currency: "usd",
          description: "An example charge",
          source: req.body.id
        });
    
        res.json({status});
      } catch (err) {
        console.log(err);
        res.status(500).end();
      }
  });

app.listen(port, () => {
    console.log('We are live on port:', port)
})