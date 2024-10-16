import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

// apicore
import { APICore, setAuthorization } from '../../helpers/api/apiCore'

// helpers
import { login as loginApi, logout as logoutApi, signup as signupApi, forgotPassword as forgotPasswordApi, getMessages as getMessagesApi , sendMessage as sendMessageApi} from '../../helpers/api/auth'

// actions
import { authApiResponseSuccess, authApiResponseError } from './actions'

// constants
import { AuthActionTypes } from './constants'
import { ChatMessage } from '@/pages/apps/Chat/data'

interface UserData {
	payload: {
		username: string
		password: string
		fullname: string
		email: string,
		from: string,
		to: string,
		value: string
	}
	type: string
}

const api = new APICore()

/**
 * Login the user
 * @param {*} payload - username and password
 */

function* login({ payload: { username, password } }: UserData): SagaIterator {
	try {
		const response = yield call(loginApi, { username, password })
		const user = response.data.data
		api.setLoggedInUser(user)
		setAuthorization(user['token'])
		// NOTE - You can change this according to response format from your api
		yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, user))
	} catch (error: any) {
		yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error))
		api.setLoggedInUser(null)
		setAuthorization(null)
	}
}

/**
 * Logout the user
 */
function* logout(): SagaIterator {
	try {
		yield call(logoutApi)
		api.setLoggedInUser(null)
		setAuthorization(null)
		yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}))
	} catch (error: any) {
		yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error))
	}
}

function* signup({ payload: { fullname, email, password } }: UserData): SagaIterator {
	try {
		console.log(fullname, email, password);
		const response = yield call(signupApi, { fullname, email, password })
		
		const user = response.data
		// api.setLoggedInUser(user);
		// setAuthorization(user['token']);
		yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user))
	} catch (error: any) {
		yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error))
		api.setLoggedInUser(null)
		setAuthorization(null)
	}
}

function* getMessage({ payload: { from } }: UserData): SagaIterator {
	try {
		const response = yield call(getMessagesApi, { from })
		// const response = yield call(getAllMessagesById, { from })
		// console.log(response)
		const messeges = response.data.data
		yield put(authApiResponseSuccess(AuthActionTypes.GET_MESSAGE, messeges))
	} catch (error: any) {
		yield put(authApiResponseError(AuthActionTypes.GET_MESSAGE, error))
	}
}

function* sendMessage({ payload: { from, to, value } }: UserData): SagaIterator {
	try {

		const response = yield call(sendMessageApi, { from, to, value })
		const message: ChatMessage = response.data.data
		yield put(authApiResponseSuccess(AuthActionTypes.SEND_MESSAGE, message))
	} catch (error: any) {
		yield put(authApiResponseError(AuthActionTypes.GET_MESSAGE, error))
	}
}

function* forgotPassword({ payload: { username } }: UserData): SagaIterator {
	try {
		const response = yield call(forgotPasswordApi, { username })
		yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, response.data))
	} catch (error: any) {
		yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error))
	}
}
export function* watchLoginUser() {
	yield takeEvery(AuthActionTypes.LOGIN_USER, login)
}

export function* watchLogout() {
	yield takeEvery(AuthActionTypes.LOGOUT_USER, logout)
}

export function* watchSignup(): any {
	yield takeEvery(AuthActionTypes.SIGNUP_USER, signup)
}

export function* watchGetMessage(): any {
	yield takeEvery(AuthActionTypes.GET_MESSAGE, getMessage)
}

export function* watchSendMessage(): any {
	yield takeEvery(AuthActionTypes.SEND_MESSAGE, sendMessage)
}

export function* watchForgotPassword(): any {
	yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword)
}

function* authSaga() {
	yield all([fork(watchLoginUser), fork(watchLogout), fork(watchSignup), fork(watchForgotPassword), fork(watchGetMessage), fork(watchSendMessage)])
}

export default authSaga
