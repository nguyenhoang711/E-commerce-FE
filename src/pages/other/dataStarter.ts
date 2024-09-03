import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'
import avatar7 from '@/assets/images/users/avatar-7.jpg'
import avatar8 from '@/assets/images/users/avatar-8.jpg'
import avatar9 from '@/assets/images/users/avatar-9.jpg'
import avatar10 from '@/assets/images/users/avatar-10.jpg'

interface ProductDetails {
	productName: string
	price: number
	sizeAvailable: string[]
	variant?: string[]
}

const productDetails: ProductDetails[] = [
	{
		productName: 'App Design & Development 0',
		price: 300000,
		sizeAvailable: ["S", "M", "K", ""],
		variant: ["Hong canh sen", "Vang hoa nhai"],
	},
    {
		productName: 'App Design & Development 1',
		price: 300000,
		sizeAvailable: ["S", "M", "K", ""],
		variant: ["Hong canh sen", "Vang hoa nhai 2"],
	},
    {
		productName: 'App Design & Development 3',
		price: 300000,
		sizeAvailable: ["S", "M", "K", ""],
		variant: ["Hong canh sen", "Vang hoa nhai"],
	},
    {
		productName: 'App Design & Development 4',
		price: 300000,
		sizeAvailable: ["S", "M", "K", ""],
		variant: ["Hong canh sen", "Vang hoa nhai"],
	},
    {
		productName: 'App Design & Development 5',
		price: 300000,
		sizeAvailable: ["S", "M", "K", ""],
		variant: ["Hong canh sen", "Vang hoa nhai"],
	},
]