import React from 'react';
import skeleton from '../styles/skeleton.module.css'
import style from '../styles/saldos.module.css'

const Skeleton = () => {
    return (
        <div className={style.saldo_container}>
                <div className={style.currency_container}>
                    <div className={`${skeleton.img} ${skeleton.loading_sk}`}></div>
                    <p className={`${skeleton.p} ${skeleton.loading_sk}`}></p>
                </div>
            <div className={style.balance_container}>
                <p className={`${skeleton.saldo} ${skeleton.loading_sk}`}></p>
                <p className={`${skeleton.saldo} ${skeleton.loading_sk}`}></p>
            </div>
        </div>
    );
};

export default Skeleton;