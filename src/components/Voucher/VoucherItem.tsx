import './VoucherItem.scss'
import logoVoucher from '../../assets/images/logoVoucher.png'
import { Voucher } from './types';
import CommonUtils from '../../utils/commonUtils'

const VoucherItem = ({voucher}: {voucher: Voucher}) => {

    return (
        <>
            <div className="box-voucher">
                <div className="content-left">
                    <img src={logoVoucher} title='fag'></img>
                    <span>{voucher.name}</span>
                </div>
                <div className="border-center">

                </div>
                <div className="content-right">
                    <div className="box-content-right">
                        <span className="name-voucher">Giảm {voucher.type}</span>
                        <span className="max-value-voucher">Giảm tối đa {CommonUtils.formatter.format(voucher.maxValue)}</span>
                        <div className="box-percent">
                            <div className="wrap-percent">
                                <div className="percent"></div>
                            </div>
                            <span className="used-percent">Đã dùng {voucher.usedAmount}%</span>
                        </div>
                        <button className="btn-voucher">Lưu</button>
                    </div>

                </div>
            </div>           
        </>
    );
}

export default VoucherItem;