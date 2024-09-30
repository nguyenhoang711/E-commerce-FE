import { useState } from 'react'
import ChatUsers from './ChatUsers'
import ChatArea from './ChatArea'

// components
import PageBreadcrumb from '../../../components/PageBreadcrumb'

//dummy data
import { ChatUser } from './data'
// import { ChatUser, users } from './data'
import { OffcanvasLayout } from '../../../components/HeadlessUI'
import { useViewPort } from '../../../hooks'
import { APICore } from '@/helpers/api/apiCore'

const api = new APICore()

const ChatApp = () => {
	const user = api.getLoggedInUser()
	const [selectedUser, setSelectedUser] = useState<ChatUser>(user)

	/**
	 * On user change
	 */
	const onUserChange = (user: ChatUser) => {
		setSelectedUser(user)
	}

	const [chatAreaOpen, setChatAreaOpen] = useState<boolean>(false)
	const handleChatAreaPanel = () => {
		setChatAreaOpen(!chatAreaOpen)
	}

	// const { width } = useViewPort()
	return (
		<>
			<PageBreadcrumb title="Chat" subName="Apps" />
			<div className="relative lg:overflow-visible overflow-hidden">
				<div className="lg:flex gap-4">
					{/* <ChatUsers onUserSelect={onUserChange} chatToggler={handleChatAreaPanel} /> */}
					<ChatArea selectedUser={selectedUser} chatToggler={handleChatAreaPanel} />

					{/* {width >= 1024 ? (
						<ChatArea selectedUser={selectedUser} chatToggler={handleChatAreaPanel} />
					) : (
						<OffcanvasLayout open={chatAreaOpen} toggleOffcanvas={handleChatAreaPanel} placement="end" sizeClassName="w-full">
							<ChatArea selectedUser={selectedUser} chatToggler={handleChatAreaPanel} />
						</OffcanvasLayout>
					)} */}
				</div>
			</div>
		</>
	)
}

export default ChatApp
