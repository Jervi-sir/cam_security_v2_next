'use client'
import { useCheckout } from "@/context/CheckoutProvider";
import { useEffect, useState } from "react";

const methods = ['direct', 'credit_card'];
export const PaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useCheckout();
  useEffect(() => {
    setPaymentMethod(methods[0]);
  }, [])

  return (
    <>
    <div className="mt-lg-3 mb-30">
        <div className="woocommerce-checkout-payment">
          <ul className="wc_payment_methods payment_methods methods">
            <li className="wc_payment_method ">
              <input onClick={() => setPaymentMethod(methods[0])} type="radio" className="input-radio" checked={ paymentMethod === methods[0] ? true : false } />
              <label onClick={() => setPaymentMethod(methods[0])} >Direct bank transfer</label>
              <div hidden={ paymentMethod === methods[0] ? false : true }>
                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
            </li>
            <li className="wc_payment_method ">
              <input onClick={() => setPaymentMethod(methods[1])} type="radio" className="input-radio" checked={ paymentMethod === methods[1] ? true : false } />
              <label onClick={() => setPaymentMethod(methods[1])} >Credit Card</label>
              <div hidden={ paymentMethod === methods[1] ? false : true }>
                <p>Pay with cash upon delivery.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}