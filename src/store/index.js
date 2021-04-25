import {createStore,applyMiddleware,combineReducers} from 'redux'

//导入reducers
import {loginReducer} from './reducers/loginReducer'
import {listReducer} from './reducers/listReducer'
import {offIndexReducer} from './reducers/off-indexReducer'

//导入defSaga
import {defSaga} from './sagas/index'

import createSagaMiddleware from 'redux-saga'

const middleware = createSagaMiddleware()

export default createStore(
    combineReducers({
        user:loginReducer,
        list:listReducer,
        offIndex:offIndexReducer,
    }),
    {},
    applyMiddleware(middleware)
    )

middleware.run(defSaga)