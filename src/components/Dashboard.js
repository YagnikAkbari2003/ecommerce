import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/images/wappnet-log.png'
import { CiHeart } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import traditional from '../assets/images/chaniya-choli.webp'
import kurti from '../assets/images/kurti.jpg'
import saree from '../assets/images/saree.avif'
import skirt from '../assets/images/skirt.jpg'
import ResponsiveNavBar from './ResponsiveNavBar';
import Breadcrumb from './Breadcrumb';
import { useSelector } from 'react-redux';
import CouponCode from './CouponCode';

const Dashboard = () => {
    const [responsivenavbar, setResponsiveNavbar] = useState(false);
    const cartItems = useSelector(state => state.products.productsAddedToCart);
    const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0);
    const wishlistItem = useSelector(state => state.wishlists.productsAddedToWishlist);
    return (
        <>
            <header className='px-2 py-4 shadow-sm lg:bg-white `responsivenavbar ? bg-gray-900 :`'>
                <div className='md:container flex items-center justify-end'>
                    {/* <Link to="/">
                        <img src={logo} alt="Logo" className='w-32' />
                    </Link> */}

                    <div className='flex item-center space-x-4'>
                        <Link to="/wishlist" className='text-center text-gray-700 hover:text-primary transition relative flex-col items-center hidden lg:flex'>
                            <div className='text-3xl'>
                                <CiHeart />
                            </div>
                            <div className='text-xs leading-3'>
                                Wish List
                            </div>
                            <span className='absolute right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
                                {wishlistItem.length}
                            </span>
                        </Link>
                        <Link to="/cart#" className='hidden lg:flex text-center text-gray-700 hover:text-primary transition relative flex-col items-center'>
                            <div className='text-3xl'>
                                <IoBag />
                            </div>
                            <div className='text-xs leading-3'>
                                Cart
                            </div>
                            <span className='absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
                                {totalQuantity}
                            </span>
                        </Link>
                        <Link to="/account" className='hidden lg:flex text-center text-gray-700 hover:text-primary transition relative  flex-col items-center'>
                            <div className='text-3xl'>
                                <CiUser />
                            </div>
                            <div className='text-xs leading-3'>
                                Account
                            </div>
                        </Link>

                        <button onClick={() => setResponsiveNavbar(!responsivenavbar)} aria-controls="mobile-menu" aria-expanded="false"><GiHamburgerMenu className='lg:hidden items-end `responsivenavbar ? text-white : `' /></button>

                    </div>
                </div>
            </header>
            {responsivenavbar && (<div id="mobile-menu" className='bg-gray-900'>
                <ResponsiveNavBar />
            </div>)}
            <nav className='bg-gray-800 hidden lg:block'>
                <div className='container flex'>
                    <div className='px-8 py-4 bg-primary flex items-center cursor-pointer relative group'>
                        <span className='text-white'>
                            <GiHamburgerMenu />
                        </span>
                        <span className='capitalize ml-2'>All Categories</span>
                        <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-dashed divide-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible group-hover:z-10'>
                            <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <img src={traditional} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                                <span className='ml-6 text-gray-700 text-sm'>Traditional</span>
                            </Link>
                            <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <img src={kurti} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                                <span className='ml-6 text-gray-700 text-sm'>Kurti</span>
                            </Link>
                            <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <img src={saree} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                                <span className='ml-6 text-gray-700 text-sm'>Saree</span>
                            </Link>
                            <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <img src={skirt} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                                <span className='ml-6 text-gray-700 text-sm'>Skirts</span>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-between flex-grow pl-12'>
                        <div className='flex items-center space-x-6'>
                            <Link to="/" className='text-gray-200 hover:text-white transition'>Home</Link>
                            <Link to="/shop" className='text-gray-200 hover:text-white transition'>Shop</Link>
                            <Link to="/product-view" className='text-gray-200 hover:text-white transition'>About Us</Link>
                            <Link to="/" className='text-gray-200 hover:text-white transition'>Contact Us</Link>
                        </div>
                        <Link to="/login" className='text-gray-200 hover:text-white transition'>Login/Register</Link>
                    </div>
                </div>
            </nav>
            <div className="md:container">
                <div className='text-gray-600 font-medium'><Breadcrumb /></div>
            </div>
            <Outlet />
            <div className="coupon-code-container">
                <CouponCode />
            </div>
        </>
    )
}

export default Dashboard
