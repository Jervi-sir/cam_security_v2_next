'use client'
import { CardItem } from "@/components/CardItem";
import { getProducts } from "@/utils/supabase"
import { Products } from "@/utils/types";
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from 'next/navigation'

export default function Items() {
    const searchParams = useSearchParams()
    const categoryId = searchParams.get('category') || null;

    const pageLimit = 8;
    const [products, setProducts] = useState<Products[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    const loadProducts = async () => {
        if (!hasMore) return;
        
        const newProducts = await getProducts(offset, pageLimit, Number(categoryId) || null);
        if (newProducts.length === 0 || newProducts.length < pageLimit) {
            setHasMore(false);
        }
        setProducts(prev => [...prev, ...newProducts]);
        setOffset(prev => prev + pageLimit); // Update offset based on the number of new products
    };

    useEffect(() => {
        console.log('categoryId: ' + categoryId);
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                loadProducts();
            }
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
    
        return () => observer.disconnect();
    }, [offset, hasMore]);

    const [loadingDots, setLoadingDots] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingDots(prev => {
                const dots = prev.length < 3 ? prev + '.' : '';
                return dots;
            });
        }, 300); // Change dot every second
        return () => clearInterval(interval);
    }, []);
    
    return (
        <section className="space-top space-extra-bottom">
            <div className="container">
                <div className="th-sort-bar">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md">
                            <p className="woocommerce-result-count">Showing results
                            {
                                categoryId
                                &&
                                <span>: { products.length > 0 ? products[0].category_name : null }</span>
                            }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row gy-40">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-shop-grid">
                            <div className="row gy-40">
                            {products.map((product, index) => (
                                <div className="col-xl-3 col-sm-6" key={index}>
                                    <CardItem item={product} />
                                </div>
                            ))}
                            </div>
                            {hasMore && <div ref={loaderRef} style={{ height: '20px', textAlign: 'center' }}>{`Loading more${loadingDots}`}</div>}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}