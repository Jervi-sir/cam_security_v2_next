'use client'

import { useContext, useEffect, useState } from "react";
import ProductSlide from "./ProductSlide";
import { BodyPart } from "./BodyPart";
import { SuggestedProducts } from "./SuggestedProducts";
import { getThisProduct } from "@/utils/supabase";
import { Product } from "@/utils/types";
import './addButton.css'

import { useParams } from 'next/navigation'
import { useCart } from "@/context/CartContext";
import { formatNumber } from "@/utils/helpers";

const initialProductState: Product = { 
  id: 0, 
  title: '', 
  price: 0, 
  price_old: null, 
  promo_percentage: null, 
  stock_quantity: 0, 
  images: [], 
  description: '', 
  characteristics: [], 
  brand_name: '', 
  category_name: '', 
  installation_cost: null, 
  maintenance_cost: null, 
  views: 0
};

export default function Item() {
  const { addToCart } = useCart();
  const params = useParams();
  const { id } = params;

  const [qtn, setQtn] = useState(1);
  const [product, setProduct] = useState<Product>(initialProductState);
  const [adding, setAdding] = useState(false);

  const thumbnails = [
    { big: '/assets/img/product/product_2_1.jpg', thumb: '/assets/img/product/product_2_1.jpg' },
    { big: '/assets/img/product/product_2_2.jpg', thumb: '/assets/img/product/product_2_2.jpg' },
    { big: '/assets/img/product/product_2_3.jpg', thumb: '/assets/img/product/product_2_3.jpg' },
  ];

  const increaseQtn = () => {
    if (qtn < 20) setQtn(qtn + 1);
  };

  const decreaseQtn = () => {
    if (qtn > 1) setQtn(qtn - 1);
  };

  useEffect(() => {
    getThisProduct(Number(id)).then(e => setProduct(e));
  }, [])

  const handleAddToCart = () => {
    if(adding) return;
    setAdding(true);
    //addToCart({ ...product, quantityToAdd: qtn });
    addToCart(product, qtn); // Pass product and quantity as separate arguments

    //setTimeout(() => setAdding(false), 1000); // Reset the button after 1 second
  };

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
                <h2 className="product-title" style={{lineHeight: 'unset'}}>{ product.title }</h2>
                <div className="product-rating">
                  <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">2</span>(2 customer reviews)</span></div>
                  <a className="woocommerce-review-link">(<span className="count">{ formatNumber(product.views) } </span>
                   Clients ont vu ce Produit)</a>
                </div>
                <p className="price">
                  { product.price } <small>DA</small>
                  {
                    product.price_old
                    &&
                    <small><del>{ product.price_old } DA</del></small>
                  }
                </p>

                <div className="checklist style2">
                  <ul>
                    {
                    !product.characteristics
                    ?
                    null
                    :
                    (product.characteristics).map((e, index) => (
                      <li key={index}>{e}</li>
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
                  <button className={`th-btn ${adding ? 'style4' : ''}`} onClick={handleAddToCart}>
                    {adding ? 'Ajouté' : 'Ajouter au panier'}
                  </button>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">SKU: <span className="sku">{ product.brand_name} </span></span>
                  <span className="posted_in">Categorie: <a>{ product.category_name }</a></span>
                </div>
              </div>
            </div>
          </div>
          
          <BodyPart content={product.description} />

          <SuggestedProducts product_id={Number(id)} />
          
        </div>
      </section>
    </>
  )
}