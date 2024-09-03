import { Tab } from '@headlessui/react'

// components
import { PageBreadcrumb } from '../components'
import { NavLink } from 'react-router-dom'

interface TabContentItem {
	id: number
	title: string
	link: string
}

const NavigationBar = () => {
	const tabContents: TabContentItem[] = [
		{
			id: 1,
			title: 'Trang chủ',
			link: '/',
		},
		{
			id: 2,
			title: 'Cửa hàng',
			link: '/shop',
		},
		{
			id: 3,
			title: 'Tin tức',
			link: '/blog',
		},
        {
			id: 4,
			title: 'Giảm giá',
			link: '/voucher',
		},
	]

	return (
		<>
			<div className="mr-8 pt-0">
				<Tab.Group>
					<Tab.List as="nav" className="flex space-x-3">
						{(tabContents || []).map((tab) => (
							<Tab key={tab.title} className={({ selected }) => `py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent -mb-px transition-all text-lg whitespace-nowrap text-gray-500 hover:text-primary ${selected ? 'border-b-primary font-semibold border-primary text-primary hover:text-primary' : 'text-gray-500 hover:text-primary'}`}>
                                <NavLink to={tab.link}>
								    {tab.title}
                                </NavLink>
							</Tab>
						))}
				    </Tab.List>
				</Tab.Group>
			</div>
		</>
	)
}

export default NavigationBar
