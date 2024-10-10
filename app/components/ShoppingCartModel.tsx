"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"




export default function ShoppingCartModel() {
    const {cartCount, shouldDisplayCart, handleCartClick,cartDetails} = useShoppingCart()
    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetTrigger asChild>
    
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          
          </SheetHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
                <ul className="-my-6 divide--y divide-gray-200">
                    {cartCount === 0 ? (
                        <h1 className="text-4xl py-6" >You dont have any item</h1>
                    ) : (
                       <div>
                        {Object.values(cartDetails ?? {}).map((entry) => (
                        <li key={entry.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image src={entry.image as any} alt="product image" width={100} height={100} />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{entry.name}</h3>
                                        <h3 className="ml-4">${entry.price}</h3>       
                        </div>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                          <p>{entry.quantity}</p>
                    </div>
                </div>
            </li>
                    ))}

                       </div>
                    )}
                </ul>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
}




