import {takeEvery,select,call,put} from 'redux-saga/effects'
import { actions } from "../../constant";
//axios
import axios from 'axios'
export function* userSaga(){
    yield takeEvery(actions.LOGIN,function* (){
            const userinfo = yield select(state => state.user.data)
            //http://crm.cimns.com/index.php/admin/base/login 发送网络请求
            //请求数量
            let requestCount = 0;
            if(requestCount === 0){
                const res = yield call(axios.post,"http://crm.cimns.com/index.php/admin/base/login",{...userinfo});
                if(res.data.code === 200){
                    //发送一个成功的action
                    const data = res.data.data
                    const {authKey,sessionId,userInfo} = {...data}
                    yield put({
                        type:actions.SUCCESS_LOGIN,
                        token:{authKey,sessionId,userInfo}
                    })
                }else if(res.data.code === 400){
                    yield put({
                        type:actions.ERROR_LOGIN,
                    })
                };
                requestCount ++;
            }    
    });
}