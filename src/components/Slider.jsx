'use client'
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Slider({ data }) {

    const [current, setcurrent] = useState(0)


    useEffect(
        () => {

            const interval = setInterval(

                () => {

                    setcurrent(

                        (current) => {

                            return current === data.length - 1 ? 0 : current + 1

                        }

                    )

                },
                2000


            )

            return () => {

                clearInterval(interval)

            }

        },
        []
    )

    return (
        <div className='relative w-full h-[350px] overflow-hidden'>
            {data.map((d, i) => (
                <div
                    key={i}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-900 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <Image

                        src={d.image}
                        alt='banner'
                        fill
                        className='rounded-3xl object-cover'
                        sizes='100vw'
                    />
                    <Link href={`/recipes/${d.id}`}  ><div className='absolute flex items-center gap-1 bottom-2 cursor-pointer font-bold px-4 bg-amber-400 p-2 rounded-2xl left-4'>
                        Read more <IoIosArrowDown className="mt-1" />
                    </div>
                    </Link>

                </div>
            ))}
        </div>
    )
}

