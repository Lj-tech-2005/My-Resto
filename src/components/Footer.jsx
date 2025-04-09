import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-gray-800   px-6 py-19'>
            <div className='max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto'>

                <div className='flex flex-col gap-6 col-span-1 sm:col-span-2'>
                    <h1 className='text-2xl md:text-4xl text-yellow-400 font-bold'>Recipe <span className='text-white'> Heaven</span></h1>
                    <p className='text-white'>
                        At Recipe Heaven, we're passionate about bringing delicious, easy-to-follow recipes to your kitchen. 
                        Whether you're a seasoned chef or just starting out, our goal is to inspire your cooking journey with 
                        wholesome meals, tips, and creative ideas for every occasion.
                    </p>
                    <div className='flex gap-6 text-white text-3xl'>
                        <FaFacebookSquare className='hover:text-yellow-300 transition-transform duration-300 hover:scale-110' />
                        <FaInstagram className='hover:text-yellow-300 transition-transform duration-300 hover:scale-110' />
                        <FaTwitterSquare className='hover:text-yellow-300 transition-transform duration-300 hover:scale-110' />
                        <FaGithubSquare className='hover:text-yellow-300 transition-transform duration-300 hover:scale-110' />
                    </div>
                </div>

                <div>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className='text-yellow-400 font-semibold'>Recipes</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Quick & Easy</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Healthy Meals</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Vegetarian</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Desserts</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className='text-yellow-400 font-semibold'>Resources</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Cooking Tips</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Ingredient Guides</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Meal Planning</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Kitchen Essentials</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className='text-yellow-400 font-semibold'>Company</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>About Us</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Food Blog</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Contributors</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Contact</li>
                        <li className='hover:text-yellow-300 transition-colors duration-200 cursor-pointer'>Careers</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

