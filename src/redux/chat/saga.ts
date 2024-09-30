import { getAllMessagesById as getMessagesApi } from "@/helpers";
import { SagaIterator } from '@redux-saga/core'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { chatApiResponseError, chatApiResponseSuccess } from "./actions";
import { ChatActionTypes } from "./constants";

interface ChatData {
    payload: {
        id: number
        from: string
        to: string
        message: {
            type: string
            value: any
        }
        sendOn?: string
    }
    type: string
}

/**
 * get all messages
 * @param {*} payload - from
 */
function* getAllMessages({ payload: { from }}: ChatData) : SagaIterator {
    try {
        const response = yield call(getMessagesApi, { from } )
        console.log(response)
        yield put(chatApiResponseSuccess(ChatActionTypes.GET_MESSAGES, response.data))
    } catch (err: any) {
        yield put(chatApiResponseError(ChatActionTypes.GET_MESSAGES, err))
    }
}

export function* watchGetAllMessages() {
	yield takeEvery(ChatActionTypes.GET_MESSAGES, getAllMessages)
}

function* chatSaga() {
	yield all([fork(watchGetAllMessages)])
}

export default chatSaga