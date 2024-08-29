import { Link } from 'react-router-dom'
import { categories } from './data'

const LeftSide = () => {
	return (
		<div className="card p-6 h-full min-h-full lg:rounded-md rounded-none">
			<div className="mb-3">
				<form>
					<div className="relative flex rounded-md">
						<input type="text" id="trailing-button-add-on-with-icon-and-button" name="trailing-button-add-on-with-icon-and-button" className="form-input form-input-light ps-9" placeholder="People, groups & messages..." />
						<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
							<i className="ri-search-line text-base"></i>
						</div>
					</div>
				</form>
			</div>
			<div data-simplebar className="h-full p-6">
			<h3 className="text-lg uppercase">Các danh mục</h3>
			<div className="flex flex-col ">
				<Link to="" className="text-reset mb-2 flex items-center">
					<i className="ri-checkbox-blank-circle-line me-1 text-success"></i>
					<span>App Development</span>
				</Link>

				<Link to="" className="text-reset mb-2 flex items-center">
					<i className="ri-checkbox-blank-circle-line me-1 text-warning"></i>
					<span>Office Work</span>
				</Link>
			</div>
                {categories.map((category, idx) => (
					<div key={idx} className="flex items-center gap-2 mt-1.5">
						<input type="checkbox" className="form-checkbox rounded" id={`checklist-${idx}`}/>
						<label className="font-semibold text-gray-500 dark:text-gray-300 text-sm" htmlFor={`checklist-${idx}`}>
							{category}
						</label>
					</div>
				))}
			</div>
		</div>
	)
}

export default LeftSide
