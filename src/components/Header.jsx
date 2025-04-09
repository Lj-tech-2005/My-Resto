'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Header() {

    const pathname = usePathname();
    const menuItem = [

        {
            name: "Home",
            link: "/"
        },
        {
            name: "Recipes",
            link: "/recipes"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

    const [toggle, settoggle] = useState(false);



    return (
        <header className="bg-gray-800  shadow-gray-950 py-6 fi">
            <div className="container mx-auto  flex justify-between items-center px-6">
                <h1 className="ms-3 text-3xl font-bold text-white">
                    <Link href="/">
                        <span className='text-amber-400'>Recipe</span> Heaven
                    </Link>
                </h1>


                {
                    toggle ?
                        <IoClose onClick={() => settoggle(!toggle)} className='text-2xl text-white cursor-pointer block md:hidden' />
                        :
                        <FaBars onClick={() => settoggle(!toggle)} className='text-2xl text-white cursor-pointer block md:hidden' />


                }

                <nav className="space-x-4 hidden md:block">

                    {
                        menuItem.map((d, i) => {

                            return (

                                <Link href={d.link} key={i} className={`text-white ps-3  cursor-pointer p-2 rounded ${pathname == d.link ? "bg-amber-400" : ""}  hover:font-bold`}>
                                    {d.name}
                                </Link>

                            )


                        })
                    }
                </nav>



                <nav className={`fixed top-[0px] md:hidden ${toggle == true ?"left-0":"left-[-100%]"}  h-screen z-[5] gap-5 w-[50vw] p-4 bg-black  opacity-100  flex flex-col`}>

                    {
                        menuItem.map((d, i) => {

                            return (

                                <Link href={d.link} key={i} className={`text-white ps-3  cursor-pointer p-2 rounded ${pathname == d.link ? "bg-amber-400" : ""}  hover:font-bold`}>
                                    {d.name}
                                </Link>

                            )


                        })
                    }
                </nav>

            </div>
        </header>
    );
}