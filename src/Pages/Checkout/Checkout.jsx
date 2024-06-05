import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import React from 'react'

const Checkout = () => {

  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });


  return (
    <div>
    <h1>Checkout</h1>
    </div>
  )

}

export default Checkout