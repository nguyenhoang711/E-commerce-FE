import React, { useEffect, useState } from 'react';
import { Link, NavLink,useLocation  } from 'react-router-dom';

import './OrderHomePage.scss';
import Logo from "@/assets/images/logo.png"
function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
const VnpayPaymentSuccess = () => {
    let query = useQuery();
    useEffect(() => {
        let objectParam = {
            vnp_Amount:query.get('vnp_Amount'),
            vnp_BankCode:query.get('vnp_BankCode'),
            vnp_BankTranNo:query.get('vnp_BankTranNo'),
            vnp_CardType:query.get('vnp_CardType'),
            vnp_OrderInfo:query.get('vnp_OrderInfo'),
            vnp_PayDate:query.get('vnp_PayDate'),
            vnp_ResponseCode:query.get('vnp_ResponseCode'),
            vnp_TmnCode:query.get('vnp_TmnCode'),
            vnp_TransactionNo:query.get('vnp_TransactionNo'),
            vnp_TransactionStatus:query.get('vnp_TransactionStatus'),
            vnp_TxnRef:query.get('vnp_TxnRef'),
            vnp_SecureHash:query.get('vnp_SecureHash')
        
        }
        let confirm = async()=>{
        }
        confirm()
    }, [])
    return (
        <>
            <div className="wrap-order">
                <div className="wrap-heading-order">
                    <NavLink to="/" className="navbar-brand logo_h">
                        <img src={Logo} alt="" />
                    </NavLink>
                    <span>Thanh Toán VNPAY</span>
                </div>
               
                <div className="wrap-order-item">
                    <section className="cart_area">
                        <div className="container">
                            <div className="cart_inner">
                                <div className="col-md-12">
                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="text-right">Thông tin thanh toán</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div style={{ width: '100%', height: '100px', backgroundColor: '#f5f5f5' }}></div>
        </>

    );
}

export default VnpayPaymentSuccess;