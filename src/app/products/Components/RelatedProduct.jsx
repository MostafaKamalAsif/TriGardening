'use client';
import React from 'react';
import { products } from '@/app/data/productsData';
import Image from 'next/image';
import Link from 'next/link';

const RelatedProducts = ({ product }) => {
  // ✅ Make sure the prop exists
  if (!product) {
    
    return null;
  }

  // ✅ Get related products (same category but not the same product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mt-[100px]">
      <h2 className="text-[36px] font-semibold text-[#000] mb-8">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {relatedProducts.map((item) => (
          <Link href={`/products/${item.slug}`} key={item.id}>
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-4 cursor-pointer">
              <Image
                src={item.images[0]}
                alt={item.name}
                width={300}
                height={300}
                className="rounded-xl w-full h-[300px] object-cover"
              />
              <h3 className="text-[20px] font-medium mt-3 text-[#2D5016]">{item.name}</h3>
              <p className="text-[#CC7722] text-[18px] font-semibold mt-1">৳ {item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
