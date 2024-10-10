"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity';

export interface ProductCart {
    name:string;
    description: string;
    price:number;
    currency:string;
    image:any;
}

export const AddToBag = ({name,price,description,currency,image} : ProductCart) => {
    const {checkoutSingleItem} = useShoppingCart()

    function buyNow(priceId: string) {
        checkoutSingleItem(priceId);
    }

    const imageUrl = image && image.length > 0 ? urlFor(image[0].asset).url() : '';
    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image: imageUrl,
        id:"jnfe efvbh"
    }
  return (
    <Button onClick={() => buyNow(product.id)}>
        Add to Cart
    </Button>
  )
}
