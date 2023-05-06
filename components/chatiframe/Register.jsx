import React from 'react'

function Register() {
  return (

    <div className='min-h-fill flex items-center justify-center mt-37 py-12 px-4 sm:px-6 lg:px-8 aligh'>
        <div className= 'max-w-nd w-full space-y-8'>
            <div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign Up now </h2>
                <p className='mt-2 text-center text-sm text-gray-600'>
                Or
                <a href='./Login.jsx' className='font-medium text-indigo-600 hover:text-indigo-500 px-2'>Sign in</a>
                </p>
            </div>

            <form className='mt-8 space-y-6'>
                <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                        <input type='text' autoComplete='none' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs ' placeholder='Name' />
                    </div>
                    <div>
                        <input type='email' autoComplete='none' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs ' placeholder='Email address' />
                    </div>
                    <div>
                        <input type='password' autoComplete='none' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xs ' placeholder='Password' />
                    </div>
                </div>

                <div>
                    <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Sign Up
                    </button>
                </div>
            </form>

        </div>

    </div>
    

   
  )
}

export default Register