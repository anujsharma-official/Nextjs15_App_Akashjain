import Image from 'next/image'
import React from 'react'
import imgPlaceholder from '@/public/assets/images/img-placeholder.webp'
import Link from 'next/link'
import { WEBSITE_PRODUCT_DETAILS } from '@/routes/WebsiteRoute'
const ProductBox = ({ product }) => {

    return (
        <div className="rounded-lg hover:shadow-lg border overflow-hidden">
  <Link href={WEBSITE_PRODUCT_DETAILS(product.slug)}>
    <Image
      src={product?.media[0]?.secure_url || imgPlaceholder.src}
      width={400}
      height={400}
      alt={product?.media[0]?.alt || product?.name}
      title={product?.media[0]?.title || product?.name}
      className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover object-top"
    />
    <div className="p-2 sm:p-3 border-t">
      <h4 className="text-sm sm:text-base md:text-lg font-medium truncate">
        {product?.name}
      </h4>
      <p className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm mt-1 sm:mt-2">
        <span className="font-semibold">
          {product?.sellingPrice.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </span>
        <span className="line-through text-gray-400">
          {product?.mrp.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </span>
        <span className="text-green-600 font-semibold">
          {product?.discountPercentage?.toFixed(0)}% Off
        </span>
      </p>
    </div>
  </Link>
</div>

    )
}

export default ProductBox