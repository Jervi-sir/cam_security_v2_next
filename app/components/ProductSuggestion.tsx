'use client'
import { CardItem } from "@/components/CardItem";
import { getRandomData } from "@/utils/supabase";
import { Products } from "@/utils/types";
import { useEffect, useState } from "react";

export function ProductSuggestion() {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    getRandomData().then(e => setProducts(e))
  }, []);

  return (
    <>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Our Best Products</span>
            <h2 className="sec-title">We Offer Better Products for the Market </h2>
          </div>
          <div className="row gy-40">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-shop-grid">
                <div className="row gy-40">
                  {
                    products.map((e, index) => (
                      <div className="col-xl-3 col-sm-6" key={index}>
                        <CardItem item={e} />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: '50px', textAlign: 'center'}}>
            <a href="/items" className="th-btn style4">View More Products</a>
          </div>
        </div>
        
      </section>
    </>
  )
}