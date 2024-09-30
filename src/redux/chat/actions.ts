// constants
import { ChatActionTypes } from './constants'

export interface ChatActionType {
	type: ChatActionTypes.API_RESPONSE_SUCCESS | ChatActionTypes.API_RESPONSE_ERROR | ChatActionTypes.GET_MESSAGES
	payload: {} | string
}

interface UserResponse {
    id?: string
	name?: string
	avatar?: string
	email?: string
}

interface ChatData {
	id: number
	from: UserResponse
	to: UserResponse
	message: {
		type: string
		value: any
	}
	sendOn?: string
}

// common success
export const chatApiResponseSuccess = (actionType: string, data: ChatData | {}): ChatActionType => ({
	type: ChatActionTypes.API_RESPONSE_SUCCESS,
	payload: { actionType, data },
})
// common error
export const chatApiResponseError = (actionType: string, error: string): ChatActionType => ({
	type: ChatActionTypes.API_RESPONSE_ERROR,
	payload: { actionType, error },
})

export const getMessages = ( from: string ): ChatActionType => ({
	type: ChatActionTypes.GET_MESSAGES,
	payload: { from },
})
