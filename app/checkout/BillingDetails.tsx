'use client'
import { useCheckout } from "@/context/CheckoutProvider";
import { Wilayas } from "@/utils/db"
import { formatPhoneNumber } from "@/utils/helpers";
import { useState } from "react";

export const BillingDetails = () => {
  const { 
    phoneNumber, setPhoneNumber,
    fullName, setFullName,
    address, setAddress,
    wilaya, setWilaya,
  } = useCheckout();

  const handlePhoneChange = (event) => {
    if(event.target.value.length > 15 ) return ;
    const formattedNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <form action="#" className="woocommerce-checkout mt-40">
      <div className="row ">
        <div className="col-lg-12">
          <h2 className="h4">Billing Details</h2>
          <div className="row">
            {/* Phone Number */}
            <div className="col-6 form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="(0558) .. .. .."
                value={phoneNumber}
                onChange={e => {handlePhoneChange(e);}}
                required
              />
            </div>
            {/* Full name */}
            <div className="col-6 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name Complet"
                onChange={e => setFullName(e.target.value)} 
                value={fullName}
              />
            </div>
            {/* Address */}
            <div className="col-6 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Addresse"
                onChange={e => setAddress(e.target.value)}
                value={address}
              />
            </div>
            {/* Wilaya */}
            <div className="col-6 form-group">
              <select onChange={e => { setWilaya(e.target.value) }} className="form-select" value={wilaya} required defaultValue={""}>
                <option value="" disabled selected hidden>Select Wilaya</option>
                {Wilayas.map((wilaya, index) => (
                  <option key={index} value={wilaya}>{`${index + 1 < 10 ? '0' : ''}${index + 1} - ${wilaya}`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}