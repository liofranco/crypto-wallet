import React, { createContext, useState } from 'react';

export const MenuContext = createContext()

const MenuProvider = (props) => {

    const [menu, setMenu] = useState(false)

    return (
        <MenuContext.Provider
            value={{
                menu,
                setMenu
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
};

export default MenuProvider;