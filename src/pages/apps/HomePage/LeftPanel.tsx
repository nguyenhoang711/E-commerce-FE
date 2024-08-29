import { Link } from 'react-router-dom'
import { categories } from './data'

const LeftSide = () => {
	return (
		<div className="card p-6 h-3/6 min-h-1/6 lg:rounded-md rounded-none">
			<div data-simplebar className="p-6">
			<h2 className="text-lg uppercase">Các danh mục</h2>
				<div className="flex flex-col">
					{categories.map((category, idx) => (
						<div key={idx} className="flex items-center gap-4 mt-1.5">
							<input type="checkbox" className="form-checkbox rounded" id={`checklist-${idx}`}/>
							<label className="font-semibold text-reset" htmlFor={`checklist-${idx}`}>
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
