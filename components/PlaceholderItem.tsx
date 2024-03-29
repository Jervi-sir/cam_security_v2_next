
'use client'
import '../app/Skeleton.css'

export const PlaceholderItem = () => {
  return (
    <>
      <div className="skeleton-wrapper th-product">
        <div className="skeleton product-img"></div>
        <div className="skeleton price"></div>
        <div className="skeleton product-title"></div>
        <div className="skeleton product-rating"></div>
      </div>
    </>
  )
}
