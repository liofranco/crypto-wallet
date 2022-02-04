import React from 'react';

const Header = ({saldoTotal}) => {

    return (
        <div className="header-container flex-center">
            <div className="flex-center header">
                {/* <div className="">
                    CW
                </div> */}
                <div className="saldo">
                    ${saldoTotal}
                </div>
                {/* <div className="user-img flex-center">
                    LF
                </div> */}
            </div>
        </div>
    );
};

export default Header;