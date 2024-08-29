//image
import Img1 from '@/assets/images/small/small-1.jpg'
import Img2 from '@/assets/images/small/small-2.jpg'
import Img3 from '@/assets/images/small/small-3.jpg'
import Img4 from '@/assets/images/small/small-4.jpg'

export interface Product {
	id: number
	product_name: string
	product_description: string
	price: number
	image: string
}

const categories: string[] = [
    "Tất cả",
    "Áo thun",
    "Áo sơ mi",
    "Áo khoác",
    "Quần dài",
]

const products: Product[] = [
    {
        id: 1,
        product_name: "Quan ao",
        product_description: "abcd",
        price: 100000,
        image: Img1,
    },
    {
        id: 2,
        product_name: "Quan ao",
        product_description: "abcd",
        price: 100000,
        image: Img2,
    },
    {
        id: 3,
        product_name: "Quan ao",
        product_description: "abcd",
        price: 100000,
        image: Img3,
    },
    {
        id: 4,
        product_name: "Quan ao",
        product_description: "abcd",
        price: 100000,
        image: Img4,
    },
    {
        id: 5,
        product_name: "Quan ao",
        product_description: "abcd",
        price: 100000,
        image: Img2,
    }
]

export { products, categories }