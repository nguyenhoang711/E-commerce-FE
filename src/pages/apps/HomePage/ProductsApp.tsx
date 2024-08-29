import { Link } from 'react-router-dom'

//image
import Img1 from '@/assets/images/small/small-1.jpg'
import Img2 from '@/assets/images/small/small-2.jpg'
import Img3 from '@/assets/images/small/small-3.jpg'
import Img4 from '@/assets/images/small/small-4.jpg'
import { Product } from './data'

const ProductsPart = ({ products }: { products: Product[] }) => {
	return (
		<>
			<div className="mt-6">
				<h5 className="text-base mb-4">Quick Access</h5>
				<div className="grid xl:grid-cols-3 md:grid-cols-2 -mx-1.5 gap-x-2 gap-y-4">
					{(products || []).map((pro, _) => {
						return (
							<div className="card">
								<img className="w-full h-auto rounded-t-md" src={pro.image} alt="Image Description" />
								<div className="p-6">
									<h3 className="card-title">{pro.product_name}</h3>
									<div className="pt-6 flex items-center gap-5 ">
										<Link className="btn bg-primary text-white" to="#">
											Xem chi tiết
										</Link>
										<p className="text-gray-800 dark:text-gray-400">{pro.price}</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default ProductsPart
