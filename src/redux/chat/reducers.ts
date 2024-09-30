// apicore
import { APICore } from '../../helpers/api/apiCore'

// constants
import { ChatActionTypes } from './constants'

interface UserResponse {
    id?: string
	name?: string
	avatar?: string
	email?: string
}

interface Message {
    id: number
	from: UserResponse
	to: UserResponse
	message: {
		type: string
		value: any
	}
	sendOn?: string
}

interface ChatState {
	messages?: Message[] | {}
}

const Chat = (state: ChatState, action: any): any => {
	switch (action.type) {
		case ChatActionTypes.API_RESPONSE_SUCCESS:
			switch (action.payload.actionType) {
				case ChatActionTypes.GET_MESSAGES: {
					return {
						...state,
					}
				}
				default:
					return { ...state }
			}

		case ChatActionTypes.API_RESPONSE_ERROR:
			switch (action.payload.actionType) {
				case ChatActionTypes.GET_MESSAGES: {
					return {
						...state,
						error: action.payload.error,
					}
				}
				default:
					return { ...state }
			}
			case ChatActionTypes.GET_MESSAGES:
				return { ...state}
		default:
			return { ...state }
	}
}

export default Chat