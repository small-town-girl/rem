import {all} from 'redux-saga/effects'

import {listSaga} from './listSaga'
import {userSaga} from './userSaga'
import {offindexSaga} from './off-indexSaga'

export function* defSaga(){
    yield all([userSaga(),listSaga(),offindexSaga()])
}