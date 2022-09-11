import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import style from '../styles/headerMobile.module.css'

const HeaderMobile = () => {

    const {menu, setMenu} = useContext(MenuContext)

    const handleMenu = () => {
        if(menu){
            setMenu(false)
        } else setMenu(true)
    }

    return (
        <header className={style.container}>
            <div className={style.header}>
                <h1>CryptoLF</h1>
                <img onClick={handleMenu} src="https://icongr.am/fontawesome/navicon.svg?size=30&color=eaecef" alt="" />
            </div>
        </header>
    );
};

export default HeaderMobile;