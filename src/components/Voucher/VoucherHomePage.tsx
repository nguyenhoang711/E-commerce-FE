import { useEffect, useState } from 'react';
import bannerPhoto from '../../assets/images/banner-voucher.jfif'
import voucherTodayPhoto from '../../assets/images/voucher-today.png'
import voucherAllPhoto from '../../assets/images/voucher-all.jfif';
import applyVoucherPhoto from '../../assets/images/applyVoucher.jfif';
import logoVoucher from '../../assets/images/logoVoucher.png'
import './VoucherHomePage.scss';
import VoucherItem from './VoucherItem';
import moment, { now } from 'moment';
import CommonUtils from '../../utils/commonUtils';
import storage from '@/Storage/Storage';
import { vouchers } from './data';

const VoucherHomePage = () => {
    const [dataVoucher, setdataVoucher] = useState([])
    const [count, setCount] = useState('')
    const [numberPage, setnumberPage] = useState('')
    const [user, setUser] = useState({})


    return (
        <div className="voucher-container">
            <div className="voucher-banner">
                <img className="photo-banner" src={bannerPhoto} alt=''></img>
                <img src={voucherTodayPhoto} alt=''></img>
                <img src={voucherAllPhoto} alt=''></img>
                <img src={applyVoucherPhoto} alt=''></img>
            </div>
            <div className="voucher-list">
                {(vouchers || []).map((voucher, _) => {
                    return (
                        <VoucherItem voucher={voucher} />
                    )
                })}
            </div>
        </div>
    );
}

export default VoucherHomePage;