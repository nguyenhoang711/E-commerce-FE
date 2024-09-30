import { APICore } from './apiCore'

const api = new APICore()

// product
function getAllMessagesById( params: {from: string, to: string}) {
	const baseUrl = '/api/v1/chat/all'
	// return api.create(`${baseUrl}`, params)
	// const baseUrl = '/api/v1/auth/login'
	return api.create(`${baseUrl}`, params)
}

export { getAllMessagesById }
