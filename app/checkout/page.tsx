'use client'
import { useCheckout } from "@/context/CheckoutProvider";
import { BillingDetails } from "./BillingDetails";
import { LoginSection } from "./LoginSection";
import { PaymentMethod } from "./PaymentMethod";
import { YourOrder } from "./YourOrder";
import { supabaseClient } from "@/utils/supabase";
import { useCart } from "@/context/CartContext";
import { Bars } from "react-loading-icons";
import Lottie from "react-lottie";
import animationData from '@/public/assets/lottiefiles/success.json'
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [isFetching, setIsFetching] = useState(false)
  const [isSuccessfull, setIsSuccessfull] = useState(false)

  const {
    phoneNumber, setPhoneNumber,
    fullName, setFullName,
    address, setAddress,
    wilaya, setWilaya,
    paymentMethod, setPaymentMethod,
    orders, clearCheckout
  } = useCheckout();

  const requiredFields = [phoneNumber, fullName, address, wilaya, paymentMethod];
  const isAnyFieldNull = requiredFields.some((field) => field === null);

  useEffect(() => {
    if(cart.length <= 0) {
      redirect('/');
    }
  }, [])

  const submit = async () => {
    if (phoneNumber.length <= 0) return;
    if (fullName.length <= 0) return;
    if (address.length <= 0) return;
    if (wilaya.length <= 0) return;
    setIsFetching(true)

    const { data: result, error } = await supabaseClient
      .rpc('insert_order', {
        phone_number: phoneNumber,
        full_name: fullName,
        address: address,
        wilaya: wilaya,
        payment_method: paymentMethod,
        orders: JSON.stringify(orders),
      });
    if (error) {
      console.error('Error inserting data:', error);
      setIsFetching(false)
      return null;
    }

    clearCart();
    clearCheckout();
    setIsFetching(false)
    setIsSuccessfull(true)
    return result;
  }

  return (
    <>
      {
        isFetching
        &&
        <LoadingSection />
      }

      <div className="th-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
          {
            isSuccessfull
              ?
              <div style={{ height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
                <SuccessSection />
                <div className="form-row place-order">
                  <a href="/" className="th-btn style4">Revener a l&apos;accueil</a>
                </div>
              </div>
              :
              <>
                <BillingDetails />
                <YourOrder />
                <PaymentMethod />

                <div className="d-flex gap-5">
                  <div className="form-row place-order">
                    <a href="/cart" className="th-btn style4">Go Back</a>
                  </div>
                  <div className="form-row place-order">
                    <button className="th-btn" disabled={isAnyFieldNull} onClick={submit}>Place order</button>
                  </div>
                </div>
              </>
          }


        </div>
      </div>
    </>
  )
}

const LoadingSection = () => {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, zIndex: 10,
      width: '100%', height: '80%',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Bars stroke="#3e66f3" fill="#3e66f3" />
        <h5 style={{ marginTop: '10px', color: '#3e66f3' }}>Veuillez Patienter</h5>
      </div>
    </div>
  )
}

const SuccessSection = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={260} width={260} />
      <h4 className='text-center'>Nous Vous Contacterons dès que possible</h4>
    </div>
  )
}