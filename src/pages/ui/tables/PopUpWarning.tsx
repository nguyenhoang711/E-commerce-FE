import { ModalLayout } from '../../../components/HeadlessUI'

interface DeleteWarningProps {
	isOpen: boolean
	onClose: () => void
}

const DeleteWarning = ({ isOpen, onClose }: DeleteWarningProps) => {

	/*
	 * handle form submission
	 */
	const onSubmitEvent = () => {
	}
	return (
		<ModalLayout showModal={isOpen} toggleModal={onClose} panelClassName="sm:max-w-lg sm:w-full" placement="justify-center items-start">
			<div className="duration-500 overflow-hidden ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
				<div className="flex justify-between items-center p-4 bg-primary">
					<h3 className="font-semibold text-white text-lg">Are you sure to remove this item?</h3>
					<button className="text-white" onClick={onClose} type="button">
						<i className="ri-close-line text-xl"></i>
					</button>
				</div>
                <div className="p-1.5">
                    <div className="px-6 pt-6 pb-0">
                        <form>
                            <div className="flex justify-between items-center gap-2 dark:border-slate-700">
                                <button className="text-white btn bg-danger" onClick={onClose}>
                                    Delete
                                </button>
                                <button className="btn bg-light text-gray-800 transition-all dark:bg-gray-700 dark:text-gray-100" onClick={onClose} type="button">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
			</div>
		</ModalLayout>
	)
}

export default DeleteWarning
