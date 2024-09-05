import { Voucher } from "./types";

const vouchers: Voucher[] = [
    {
        id: 1,
		name: 'Voucher 10% giảm',
		type: 'percent',
		maxValue: 20000,
		usedAmount: 2,
    },
    {
        id: 2,
		name: 'Voucher giảm 5000k',
		type: 'money',
		maxValue: 5000,
		usedAmount: 2,
    },
    {
        id: 3,
		name: 'Voucher giảm 20% trên 500k',
		type: 'percent',
		maxValue: 40000,
		usedAmount: 4,
    },
];

export { vouchers }