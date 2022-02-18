import React from 'react';

const Skeleton = () => {
    return (
        <div className="saldo-container">
                <div className="currency-container">
                    <div className="skeleton-img loading-sk"></div>
                    <p className='skeleton-p loading-sk'></p>
                </div>
            <div className="balance-container">
                <p className='skeleton-saldo loading-sk'></p>
                <p className='skeleton-saldo loading-sk'></p>
            </div>
        </div>
    );
};

export default Skeleton;