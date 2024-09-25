import { useState, useEffect, useCallback, useRef  } from 'react'
import LeftPanel from './LeftPanel'
import { useViewPort } from '../../../hooks'

// components
import { FormInput, PageBreadcrumb } from '../../../components'
import { OffcanvasLayout } from '../../../components/HeadlessUI'
import { products } from './data'
import ProductsPart from './ProductsApp'
import { getAllProducts } from '@/helpers'
import ReactPaginate from 'react-paginate';
import FormSearch from '@/components/FormSearch'

const ProductApp = () => {
	const [userProducts, setUserProducts] = useState([])
    const [dataProduct, setdataProduct] = useState([])
    const [count, setCount] = useState<number>(0)
    const [numberPage, setnumberPage] = useState<number>(1)
    const [limitPage, setlimitPage] = useState<number>(6)
    const [sortType, setSortType] = useState<string>('')
    const [offset, setoffset] = useState<number>(0)
	const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(false)
	const [keyword, setkeyword] = useState<string>('')

	const { width } = useViewPort()
	const myRef = useRef(null)

	// const handleLeftPanel = () => {
	// 	setLeftPanelOpen(!leftPanelOpen)
	// }
	
	// useEffect(() => {      
	// 	handleSearchProduct(limitPage, sortPrice)
   
    // }, [])

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	
		const formData = new FormData(event.currentTarget);
		const selectedValue = formData.get('hien-thi'); // Extracting the value of "hien-thi"
		
		console.log(selectedValue); // Will log 6, 12, or 18 depending on selection
	};

	const handleSelectLimitPage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		let limit = Number(event.target.value)
		setlimitPage(limit)
		console.log(limit)
   	}

	const handleSelectSort = async (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = +event.target.value

        if (value === 1) {
            loadUserProduct(limitPage, 'time')
			setSortType('time')
        }
        else if (value === 2) {
            loadUserProduct(limitPage, 'price')
            setSortType('price')
        }
        else if (value === 3) {
            loadUserProduct(limitPage, 'name')
			setSortType('name')
        }
	}

	const loadUserProduct = async (limitPage: number, sortType: string) => {
		const response = await getAllProducts({
			limit: limitPage,
			sort: sortType,
		}
		);
		// const data = response;
		// console.log(data);
		

		// setUserProducts(data);
	}

	const handleChangePage = async (number: number) => {
        setnumberPage(number)
        loadUserProduct(limitPage, sortType)
        setoffset(number * limitPage)
    }

	const handleSearch = (keyword: string) =>{
       
        loadUserProduct(limitPage, sortType)
        setkeyword(keyword)
    }

	const handleOnchangeSearch = (keyword: string) => {
		if(keyword === ''){
            loadUserProduct(limitPage, sortType)
            setkeyword(keyword)
        }
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
								{/* <input type="text" id="trailing-button-add-on-with-icon-and-button" name="trailing-button-add-on-with-icon-and-button" className="form-input form-input-light ps-9" placeholder="Tên sản phẩm ..." /> */}
									<FormSearch  title={"tên tên quần áo"} handleOnchange={handleOnchangeSearch} handleSearch={handleSearch} />
									<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
										<i className="ri-search-line"></i>
									</div>
								</div>
								<FormInput name="sort" type="select" className="form-select ml-3" onChange={(event) => handleSelectSort(event)} labelClassName="mb-2">
									<option defaultValue="selected" value={1}>Sắp xếp</option>
									<option value={2}>Theo giá tiền</option>
									<option value={3}>Theo tên</option>
								</FormInput>
								<FormInput name="hien-thi" type="select" className="form-select ml-6" onChange={(event) => handleSelectLimitPage(event)} labelClassName="mb-2">
									<option value={6}>Hiển thị 6</option>
									<option value={12}>Hiển thị 12</option>
									<option value={18}>Hiển thị 18</option>
								</FormInput>
							</form>
						</div>
					</div>

					<ProductsPart products={userProducts} />
					<ReactPaginate
						previousLabel={'Quay lại'}
						nextLabel={'Tiếp'}
						breakLabel={'...'}
						pageCount={count}
						marginPagesDisplayed={3}
						containerClassName={"pagination justify-content-center"}
						pageClassName={"page-item"}
						pageLinkClassName={"page-link"}
						previousLinkClassName={"page-link"}
						nextClassName={"page-item"}
						nextLinkClassName={"page-link"}
						breakLinkClassName={"page-link"}
						breakClassName={"page-item"}
						activeClassName={"active"}
						onPageChange={(event) => handleChangePage(event.selected)}
					/>
				</div>
			</div>
		</>
	)
}

export default ProductApp
