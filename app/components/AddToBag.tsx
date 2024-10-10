"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity';


export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  _id: string;
  sku: string; // Add this line
}

export const AddToBag = ({name, price, description, currency, image, _id, sku} : ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const imageUrl = image && image.length > 0 ? urlFor(image[0].asset).url() : '';

  const product = {
      name: name,
      description: description,
      price: price,
      currency: currency,
      image: imageUrl,
      _id: _id,
      sku: sku // Make sure to include sku
  };

  return (
      <Button onClick={() => { addItem(product), handleCartClick() }}>
          Add to Cart
      </Button>
  );
}
