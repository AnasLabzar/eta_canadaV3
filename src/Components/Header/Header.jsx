import React from 'react'
import logo from '../../Assets/img/logo.png'

function Header() {
    return (
        <header className='bg-[#b10007] h-[94px] w-full'>
            <div className="mx-auto max-w-[1320px] flex py-4">
                <div className="col w-1/2">
                    <img src={logo} className='w-[12em]' />
                </div>
                <div className="col w-1/2 text-center py-1 text-white flex flex-col items-end">
                    <div className='text-center'>
                        <h1 className='text-xl font-bold tracking-widest'>CUSTOMER SUPPORT</h1>
                        <p>7/7 days from 08:00 to 21:00</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header