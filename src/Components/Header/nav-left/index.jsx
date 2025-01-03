import React from 'react'
import Logo from './Logo'
import Categories from './nacional-importado'

const NavLeft = () => {
    return (

        <div className='flex justify-center lg:col-span-3 justify-self-start mr-3'>
            <Logo />
            <Categories />
        </div>
    
    )
}

export default NavLeft;