import { useState } from 'react'
import LeftPanel from './LeftPanel'
import { useViewPort } from '../../../hooks'

// components
import { FormInput, PageBreadcrumb } from '../../../components'
import { OffcanvasLayout } from '../../../components/HeadlessUI'
import { products } from './data'
import ProductsPart from './ProductsApp'

const ProductApp = () => {
	const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(false)

	const { width } = useViewPort()

	const handleLeftPanel = () => {
		setLeftPanelOpen(!leftPanelOpen)
	}

	return (
		<>
			<PageBreadcrumb title="Product manager" subName="Apps" />
			<div className="lg:flex gap-4">
				{width >= 1024 ? (
					<div className="lg:block hidden inset-y-0 start-0 transform h-ful min-h-full min-w-72 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300 lg:rtl:-translate-x-0 rtl:translate-x-full" tabIndex={-1}>
						<LeftPanel />
					</div>
				) : (
					<LeftPanel />
				)}

				<div className="card p-6 w-full">
					<div className="flex flex-wrap justify-between items-center gap-4">
						<div className="flex items-center gap-4">
							<form className='flex'>
								<div className="relative flex rounded-md">
								<input type="text" id="trailing-button-add-on-with-icon-and-button" name="trailing-button-add-on-with-icon-and-button" className="form-input form-input-light ps-9" placeholder="Tìm kiếm theo tên quần áo" />
								<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
										<i className="ri-search-line"></i>
									</div>
								</div>
								<FormInput name="select" type="select" className="form-select ml-3" labelClassName="mb-2">
									<option defaultValue="selected">Sắp xếp</option>
									<option>Theo giá tiền</option>
									<option>Theo tên</option>
								</FormInput>
								<FormInput name="hien-thi" type="select" className="form-select ml-6" labelClassName="mb-2">
									<option defaultValue="selected">Hiển thị 6</option>
									<option>Hiển thị 12</option>
									<option>Hiển thị 18</option>
								</FormInput>
							</form>
						</div>
					</div>

					<ProductsPart products={products} />
				</div>
			</div>
		</>
	)
}

export default ProductApp
