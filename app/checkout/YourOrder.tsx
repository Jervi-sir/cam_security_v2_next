'use client'
import { useCart } from "@/context/CartContext";
import { useCheckout } from "@/context/CheckoutProvider";
import { roundToNearestHalf } from "@/utils/helpers";
import { useEffect } from "react";

export const YourOrder = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalAmount, totalInstallation } = useCart();
  const { orders, setOrders } = useCheckout();

  useEffect(() => {
    setOrders(cart);
  }, []);
  
  return (
    <>
      <h4 className="mt-4 pt-lg-2">Your Order</h4>
      <form action="#" className="woocommerce-cart-form">
        <table className="cart_table mb-20">
          <thead>
            <tr>
              <th className="cart-col-image">Image</th>
              <th className="cart-col-productname">Product Name</th>
              <th className="cart-col-price">Price</th>
              <th className="cart-col-quantity">Quantity</th>
              <th className="cart-col-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((e, index) => (
                <tr className="cart_item" key={index}>
                  <td data-title="Product">
                    <span className="cart-productimage"><img width="91" height="91" src={ e.images[0] } alt="Image" /></span>
                  </td>
                  <td data-title="Name">
                    <span className="cart-productname" >{ e.title }</span>
                  </td>
                  <td data-title="Price">
                    <span className="amount"><bdi>{ e.price } <span>DA</span></bdi></span>
                  </td>
                  <td data-title="Quantity">
                    <strong className="product-quantity">{ e.amount }</strong>
                  </td>
                  <td data-title="Total">
                    <span className="amount"><bdi>{ (e.amount) * (e.price) } <span>DA</span></bdi></span>
                  </td>
                </tr>
              ))
            }
          </tbody>
          <tfoot className="checkout-ordertable">
            <tr className="cart-subtotal">
              <th>Montant des Produits</th>
              <td data-title="Subtotal" colSpan={4}><span className="woocommerce-Price-amount amount"><bdi>{ roundToNearestHalf(totalAmount) }</bdi> <span className="woocommerce-Price-currencySymbol">DA</span> </span></td>
            </tr>
            <tr className="woocommerce-shipping-totals shipping">
              <th>Montant de l&apos;Installation</th>
              <td data-title="Shipping" colSpan={4}>{ roundToNearestHalf(totalInstallation) } DA</td>
            </tr>
            <tr className="order-total">
              <th>Total</th>
              <td data-title="Total" colSpan={4}><strong><span className="woocommerce-Price-amount amount"><bdi>{ roundToNearestHalf(totalAmount + totalInstallation) } DA<span className="woocommerce-Price-currencySymbol"></span></bdi></span></strong></td>
            </tr>
          </tfoot>
        </table>
      </form>
    </>
  )
}