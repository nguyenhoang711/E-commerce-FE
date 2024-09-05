import { PREFIX_CURRENCY } from "@/constants";
const formatter = new Intl.NumberFormat('en-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: PREFIX_CURRENCY.minimumFractionDigits
})

export default { formatter };