'use client'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const links = [
    {name: 'Home', href: '/'},
    {name: 'Men', href: '/Men'},
    {name: 'Women', href: '/Women'},
    {name: 'Teens', href: '/Teens'},
]

const Navbar = () => {
    const pathname = usePathname()
    const {handleCartClick} = useShoppingCart()
  return (
   <header className='mb-8 border-b' >
        <div className='flex items-center justify-between m-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
            <Link href="/">
            <h1 className='text-2xl md:text-4xl font-bold'>Next <span className='text-primary'>Commerce</span></h1>
            </Link>

            {/* for smaller devices */}
            <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                {links.map((link,idx)=> (
                    <div key={idx}> 
                        {pathname === link.href ? (
                            <Link className='text-lg font-semibold text-primary' href={link.href}> {link.name}</Link>
                        ) : ( 
                            <Link className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary' href={link.href}>{link.name}</Link>
                        )}
                    </div>
                ))}
            </nav>

            <div className='flex divide-x border-r sm:border-l'>
                <Button variant={'outline'} 
                onClick={()=> handleCartClick()}
                className='flex flex-col gap-y-1.5 h-12 sm:h-20 md:w-34 rounded-none sm:w-20 w-12'>
                    <ShoppingBag />
                    <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
                        cart
                    </span>
                </Button>
                    
            </div>
        </div>
   </header>
  ) 
}

export default Navbar