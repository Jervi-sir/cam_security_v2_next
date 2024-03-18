'use client'

import { useEffect, useState } from "react";
import ProductSlide from "./ProductSlide";
import { BodyPart } from "./BodyPart";
import { SuggestedProducts } from "./SuggestedProducts";
import { getThisProduct } from "@/utils/supabase";
import { Product } from "@/utils/types";

import { useParams } from 'next/navigation'

const initialProductState: Product = { id: 0, title: '', price: 0, quantity: 0, images: [], description: '', characteristics: '', brand_name: '', category_name: ''};

export default function Item() {
  const params = useParams()
  const { id } = params;

  const [qtn, setQtn] = useState(1);
  const [product, setProduct] = useState<Product>(initialProductState);

  const thumbnails = [
    { big: '/assets/img/product/product_2_1.jpg', thumb: '/assets/img/product/product_2_1.jpg' },
    { big: '/assets/img/product/product_2_2.jpg', thumb: '/assets/img/product/product_2_2.jpg' },
    { big: '/assets/img/product/product_2_3.jpg', thumb: '/assets/img/product/product_2_3.jpg' },
  ];

  const increaseQtn = () => {
    if(qtn < 20 )
      setQtn(qtn + 1)
  }

  const decreaseQtn = () => {
    if(qtn <= 1) return;
    else setQtn(qtn - 1)
  }

  useEffect(() => {
    getThisProduct(id).then(e => setProduct(e));
  }, [])

  return (
    <>
      <section className="product-details space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-lg-6">
              <ProductSlide thumbnails={product.images} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <h2 className="product-title">{ product.title }</h2>
                <div className="product-rating">
                  <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">2</span>(2 customer reviews)</span></div>
                  <a href="shop-details.html" className="woocommerce-review-link">(<span className="count">2</span>
                    customer reviews)</a>
                </div>
                <p className="price">${ product.price }<del>${ product.price + 15 }</del></p>
                <p className="text mt-2">{product.description}</p>
                <div className="checklist style2">
                  <ul>
                    {
                    !product.characteristics
                    ?
                    null
                    :
                    (product.characteristics).map((e, index) => (
                      <li>{e}</li>
                    ))
                    }
                  </ul>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <input type="number" className="qty-input" step="1" min="1" max="20" name="quantity" value={qtn} title="Qty" />
                    <button className="quantity-plus qty-btn" onClick={increaseQtn}><i className="far fa-chevron-up"></i></button>
                    <button className="quantity-minus qty-btn" onClick={decreaseQtn}><i className="far fa-chevron-down"></i></button>
                  </div>
                  <button className="th-btn">Add to Cart</button>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">SKU: <span className="sku">{ product.brand_name} </span></span>
                  <span className="posted_in">Category: <a href="shop.html">{ product.category_name }</a></span>
                  <span>Tags:<a href="shop.html">automotive parts, wheels</a></span>
                </div>
              </div>
            </div>
          </div>
          
          <BodyPart />

          <SuggestedProducts product_id={id} />
          
        </div>
      </section>
    </>
  )
}