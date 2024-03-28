import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Cart = () => {
    // Retrieve cart items from the Redux store state
    const cartItems = useSelector(state => state.products.productsAddedToCart);
    console.log(cartItems);

    return (
        <div className='container grid grid-cols-12 items-start pb-16 pt-4 gap-6'>

            <div className='col-span-8 border border-red-200 p-4 rounded'>
                <h3 className='text-lg font-medium capitalize mb-4'>CheckOut</h3>
                <div className='space-y-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='text-gray-600 mb-2 block'>First Name<span className='text-primary'>*</span></label>
                            <input type="text" className='input-box' />
                        </div>
                        <div>
                            <label className='text-gray-600 mb-2 block'>Last Name<span className='text-primary'>*</span></label>
                            <input type="text" className='input-box' />
                        </div>
                    </div>
                    <div>
                        <label className='text-gray-600 mb-2 block'>Country/Region<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' />
                    </div>
                    <div>
                        <label className='text-gray-600 mb-2 block'>Street/Address<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' />
                    </div>
                    <div>
                        <label className='text-gray-600 mb-2 block'>Town/City<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' />
                    </div>
                    <div>
                        <label className='text-gray-600 mb-2 block'>Postal Code<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' />
                    </div>
                    <div>
                        <label className='text-gray-600 mb-2 block'>Phone Number<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' />
                    </div>
                    <div>
                        <label className='text-gray-600 mb-2 block'>Email Address<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' />
                    </div>
                </div>
            </div>

            <div className='col-span-4 border border-gray-200 p-4 rounded'>
                <h4 className='text-gray-800 text-lg mb-4 uppercase font-medium'>Order Summary</h4>
                <div className='space-y-2'>
                    {/* Render each cart item */}
                    {cartItems.map((item, index) => (
                        <div key={index} className='flex justify-between'>
                            <div>
                                <h5 className='text-gray-800 font-medium'>{item.title}</h5>

                                <p className='text-sm text-gray-600'>Size: {item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between border-b border-gray-200 uppercase text-gray-800 font-medium my-3'>
                    <p>Subtotal</p>
                    <p>$320</p>
                </div>
                <div className='flex justify-between border-b border-gray-200 uppercase text-gray-800 font-medium my-3'>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className='flex justify-between uppercase text-gray-800 font-medium my-3'>
                    <p className='font-semibold'>Total</p>
                    <p>$320</p>
                </div>
                <div className='flex items-center mb-4 mt-2'>
                    <input id="agreement" type="checkbox" className='text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3' />
                    <label htmlFor="agreement" className='text-gray-600 ml-3 cursor-pointer text-sm'>Agree to our <Link to="/" className="text-primary">terms & conditions</Link></label>
                </div>
                <Link to='/' className='w-full block px-4 py-3 text-center text-white font-medium bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition'>Place order</Link>
            </div>
        </div>
    )
}

export default Cart
