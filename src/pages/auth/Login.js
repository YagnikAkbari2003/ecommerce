import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Users from '../../data/users';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Find user in Users array based on email
        const user = Users.find(user => user.email === email && user.password === password);

        if (user) {
            // Store user information in local storage
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            // Redirect based on user type
            if (user.usertype === 'user') {
                navigate('/Shop');
            } else if (user.usertype === 'admin') {
                navigate('/AdminDashboard');
            }
        } else {
            // Handle invalid credentials
            if (email.trim() === '' || password.trim() === '') {
                alert('Please enter email and password.');
            } else {
                alert('Invalid email or password. Please try again.');
            }
        }
    };

    return (
        <div className='container py-16'>
            <div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
                <h2 className='text-2xl uppercase mb-1 font-medium'>Login</h2>
                <p className='text-gray-600 mb-6 text-sm'>
                    Login if you are returning customer
                </p>
                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-gray-600 mb-6 block'>Email address</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full border border-gray-300 text-gray-600 px-4 py-3 rounded text-sm focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your email address' />
                        </div>
                        <div>
                            <label className='text-gray-600 mb-6 block'>Password</label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full border border-gray-300 text-gray-600 px-4 py-3 rounded text-sm focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your password' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-6'>
                        <div className='flex items-center'>
                            <input type='checkbox' id='agreement' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                            <label className='text-gray-600 ml-3 cursor-pointer' htmlFor='agreement'>Remember me</label>
                        </div>
                        <Link to='/' className='text-primary'>Forget Password?</Link>
                    </div>
                    <div className='mt-4'>
                        <button className='block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium' type='submit'>Login</button>
                    </div>
                </form>
                <div className='mt-6 flex justify-center relative'>
                    <div className='text-gray-600 uppercase px-3 bg-white z-10 relative'>Or login with</div>
                    <div className='absolute left-0 top-3 w-full border-b-2 border-gray-200'></div>
                </div>
                <div className='mt-4 flex gap-4'>
                    <Link to='/' className='w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-medium text-sm hover:bg-blue-700'>Facebook</Link>
                    <Link to='/' className='w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-medium text-sm hover:bg-yellow-500'>Google</Link>
                </div>
                <p className='mt-4 text-gray-600 text-center'>
                    Don't have an account? <Link to='/' className='text-primary'>Register now</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
