import { APICore } from './apiCore'

const api = new APICore()

// product
function getAllProducts(params: { limit: number, sort: string}) {
	const baseUrl = '/api/v1/product/'
	return api.get(`${baseUrl}`, params)
}

function createProductForShop(params: { fullname: string; email: string; password: string }) {
	const baseUrl = '/api/v1/user/register'
	return api.create(`${baseUrl}`, params)
}

function forgotPassword(params: { username: string }) {
	const baseUrl = '/forgot-password/'
	return api.create(`${baseUrl}`, params)
}

export { getAllProducts, createProductForShop, forgotPassword }
