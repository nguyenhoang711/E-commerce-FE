import { APICore } from './apiCore'

const api = new APICore()

// product
function getAllMessagesById(params: {from: string, to: string}) {
	const baseUrl = '/api/v1/chat'
	params.from = api.getLoggedInUser().id
	return api.getWithBody(`${baseUrl}`, params)
}

export { getAllMessagesById }
