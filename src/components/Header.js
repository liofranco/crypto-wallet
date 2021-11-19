import React from 'react';

const Header = ({saldo}) => {
    return (
        <div className="header-container flex-center">
            <div className="flex-center header">
                <div className="">
                    CW
                </div>
                <div className="saldo">
                    ${saldo}
                </div>
                <div className="user-img flex-center">
                    LF
                </div>
            </div>
        </div>
    );
};

export default Header;