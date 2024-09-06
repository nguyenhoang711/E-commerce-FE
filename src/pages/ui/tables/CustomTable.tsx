import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import { PageBreadcrumb } from '../../../components'

// dummy data
import { records } from './data'
import DeleteWarning from './PopUpWarning'

const CustomTable = () => {
	/*
	 * modal handeling
	 */
	const [show, setShow] = useState<boolean>(false)
	const onCloseModal = () => {
		setShow(false)
	}
	const onOpenModal = () => setShow(true)
	return (
		<>
			<PageBreadcrumb title="Basic" subName="Table" />
            <div className="card">
                <div className="p-6">
                    <h3 className="card-title mb-4">Striped rows</h3>

                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
                                                User
                                            </th>
                                            <th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
                                                Account No.
                                            </th>
                                            <th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
                                                Balance
                                            </th>
                                            <th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {(records || []).map((record, idx) => {
                                            return (
                                                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}>
                                                    <th scope="row" className="flex items-center gap-2 px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <img className="w-8 h-8 rounded-full" src={record.image} alt="Jese image" />
                                                        <div className="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</div>
                                                    </th>
                                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.accountNo}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center justify-start space-x-3">
                                                            <Link to="">
                                                                <i className="ri-pencil-line text-base"></i>
                                                            </Link>
                                                            <Link to="">
                                                                <i className="ri-delete-bin-2-line text-base" onClick={onOpenModal}></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			{/* remove event warning */}
			{show ? <DeleteWarning isOpen={show} onClose={onCloseModal}/> : null}
		</>
	)
}

export default CustomTable 