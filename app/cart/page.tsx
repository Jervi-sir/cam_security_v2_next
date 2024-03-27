'use client'

import { NoticeWrapper } from "@/components/NoticeWrapper";
import { useCart } from "@/context/CartContext";
import { roundToNearestHalf } from "@/utils/helpers";
import { useState } from "react";

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalAmount, totalInstallation } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState(null);

  const handleRemoveClick = (productId) => {
    setShowModal(true);
    setProductIdToRemove(productId);
  };

  const confirmRemove = () => {
    removeFromCart(productIdToRemove);
    setShowModal(false);
    setProductIdToRemove(null);
  };
  
  return (
    <>
      <div className="th-cart-wrapper  space-top space-extra-bottom">
        <div className="container">
          <NoticeWrapper title={'Panier'} />
          <div className="woocommerce-cart-form">
            <table className="cart_table">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname" style={{ textAlign: 'left' }}>Product Name</th>
                  <th className="cart-col-price" style={{ textAlign: 'right' }}>Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                  <th className="cart-col-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((e, index) => (
                    <tr className="cart_item" key={index}>
                      <td data-title="Product" style={{}}>
                        <a className="cart-productimage" href={`items/` + e.id}><img width="91" height="91" src={ e.images[0] } alt="Image" /></a>
                      </td>
                      <td data-title="Name" style={{ textAlign: 'left' }}>
                        <a className="cart-productname" href={`items/` + e.id}>{ e.title }</a>
                      </td>
                      <td data-title="Price" style={{ textAlign: 'right' }}>
                        <span className="amount"><bdi>{ e.price } <span>DA</span></bdi></span>
                      </td>
                      <td data-title="Quantity">
                        <div className="quantity">
                          <button className="quantity-minus qty-btn" onClick={() => decreaseQuantity(e.id)}><i className="far fa-minus"></i></button>
                          <input type="number" className="qty-input" value={ e.amount } min="1" max="99" />
                          <button className="quantity-plus qty-btn" onClick={() => increaseQuantity(e.id)}><i className="far fa-plus"></i></button>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span className="amount"><bdi>{ (e.amount) * (e.price) } <span>DA</span></bdi></span>
                      </td>
                      <td data-title="Remove">
                        <span onClick={() => handleRemoveClick(e.id)} className="remove" style={{cursor: 'pointer'}}>
                          <i className="fal fa-trash-alt"></i>
                        </span>
                      </td>
                    </tr>
                  ))
                }
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    <table style={{ border: 'none' }}>
                      <tr>
                        <td className="p-1" style={{ fontWeight: 'bold', textAlign: 'left' }}>Montant produits</td>
                        <td className="p-1" style={{ fontWeight: 'bold', textAlign: 'right' }}>{ roundToNearestHalf(totalAmount) } DA</td>
                      </tr>
                      <tr>
                        <td className="p-1" style={{ fontWeight: 'bold', textAlign: 'left' }}>Montant de l&apos;installation</td>
                        <td className="p-1" style={{ fontWeight: 'bold', textAlign: 'right' }}>{ roundToNearestHalf(totalInstallation) } DA</td>
                      </tr>
                      <tr>
                        <td className="p-1" style={{ fontWeight: 'bold', textAlign: 'left', color: 'black' }}>Montant total a payer</td>
                        <td className="p-1" style={{ fontWeight: 'bold', textAlign: 'right', color: 'black', fontSize: '20px' }}>{ roundToNearestHalf(totalAmount + totalInstallation) } DA</td>
                      </tr>
                    </table>
                  </td> 
                  <td colSpan={3} className="actions">
                    <a href="/" className="th-btn style4">Back to Shopping</a>
                    {
                      cart.length > 0
                      &&
                      <a href="/checkout" className="th-btn">Continue Checkout</a>
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

     

      {showModal && (
        <div 
          className="cta-area bg-white"
          style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}
        >
          <p>Êtes-vous sûr de vouloir supprimer cet article du panier?</p>
          <button className="th-btn style3 mr-10" onClick={confirmRemove}>Oui</button>
          <button className="th-btn" onClick={() => setShowModal(false)}>Non</button>
        </div>
      )}

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }} onClick={() => setShowModal(false)} />
      )}

    </>
  )
}