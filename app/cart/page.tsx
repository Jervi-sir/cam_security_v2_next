import { NoticeWrapper } from "@/components/NoticeWrapper";

export default function Cart() {
  return (
    <>
      <div className="th-cart-wrapper  space-top space-extra-bottom">
        <div className="container">
          <NoticeWrapper title={'Shipping Cart'} />
          <form action="#" className="woocommerce-cart-form">
            <table className="cart_table">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname">Product Name</th>
                  <th className="cart-col-price">Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                  <th className="cart-col-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  [1,2].map((e, index) => (
                    <tr className="cart_item" key={index}>
                      <td data-title="Product" style={{}}>
                        <a className="cart-productimage" href="shop-detailis.html"><img width="91" height="91" src="assets/img/product/product_thumb_1_1.jpg" alt="Image" /></a>
                      </td>
                      <td data-title="Name">
                        <a className="cart-productname" href="shop-detailis.html">Bosco Apple Fruit</a>
                      </td>
                      <td data-title="Price">
                        <span className="amount"><bdi><span>$</span>18</bdi></span>
                      </td>
                      <td data-title="Quantity">
                        <div className="quantity">
                          <button className="quantity-minus qty-btn"><i className="far fa-minus"></i></button>
                          <input type="number" className="qty-input" value="1" min="1" max="99" />
                            <button className="quantity-plus qty-btn"><i className="far fa-plus"></i></button>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span className="amount"><bdi><span>$</span>18</bdi></span>
                      </td>
                      <td data-title="Remove">
                        <a href="#" className="remove"><i className="fal fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  ))
                }
                <tr>
                  <td colSpan={6} className="actions">
                    <a href="shop.html" className="th-btn style4">Back to Shopping</a>
                    <a href="shop.html" className="th-btn">Continue Checkout</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  )
}