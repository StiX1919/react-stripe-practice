import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Elements, StripeProvider} from 'react-stripe-elements'
require('dotenv').config()
const {REACT_APP_STRIPE_PUBLISH} = process.env
console.log(process.env)

ReactDOM.render(
    <StripeProvider apiKey={REACT_APP_STRIPE_PUBLISH}>
        <Elements>
            <App />
        </Elements>
    </StripeProvider>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
