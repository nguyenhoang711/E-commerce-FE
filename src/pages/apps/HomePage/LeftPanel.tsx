import { Link } from 'react-router-dom'
import { categories } from './data'

const LeftSide = () => {
	return (
		<div className="card p-6 h-3/6 min-h-1/6 lg:rounded-md rounded-none">
			<div data-simplebar className="p-6">
			<h3 className="text-lg uppercase">Các danh mục</h3>
				<div className="flex flex-col">
					{categories.map((category, idx) => (
						<div key={idx} className="flex items-center gap-2 mt-1.5">
							<input type="checkbox" className="form-checkbox rounded" id={`checklist-${idx}`}/>
							<label className="font-bold text-gray-500 dark:text-gray-300 text-sm" htmlFor={`checklist-${idx}`}>
								{category}
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default LeftSide
