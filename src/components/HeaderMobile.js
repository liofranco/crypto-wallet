import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

const HeaderMobile = () => {

    const {menu, setMenu} = useContext(MenuContext)

    const handleMenu = () => {
        if(menu){
            setMenu(false)
        } else setMenu(true)
    }

    return (
        <header className='header-mobile-container'>
            <div className="header-mobile">
                <h1>Crypto</h1>
                <img onClick={handleMenu} src="https://icongr.am/fontawesome/navicon.svg?size=30&color=222222" alt="" />
            </div>
        </header>
    );
};

export default HeaderMobile;