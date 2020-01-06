import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

import {CardElement, injectStripe} from 'react-stripe-elements';
import Axios from 'axios';

function App(props) {

  let submit = async() => {
    console.log('clicked')
    let {token} = await props.stripe.createToken({name: "Name"});
    console.log(token)
    let response = await axios.post('/charge', token).then((res) => {
      return res
    }).catch(err => {
      console.log(err)
      return err
    })
    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: {"Content-Type": "text/plain"},
    //   body: token.id
    // });
  
    console.log(response)
    if (response.status === 200) console.log("Purchase Complete!")
  }
  return (
    <div className="App">
      <p>Would you like to complete the purchase?</p>
        <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  );
}

export default injectStripe(App);
