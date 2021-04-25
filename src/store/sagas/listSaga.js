import {takeEvery,call,put} from 'redux-saga/effects'
import { actions,listCount } from '../../constant'
import instance from '../../sercice/request'
export function* listSaga(){
    yield takeEvery(actions.CRMLIST,function* (){
        try{
                const res = yield call(instance.post,'http://crm.cimns.com/index.php/oa/index/index','type='+listCount.type+'&page='+listCount.page+'&limit='+listCount.type)
                if(res.code === 200){
                    yield put({
                        type:actions.SUCCESS_CRMLIST,
                        data:[...res.data.list]
                    })
                }          
        } catch(error){
            yield put({
                type:actions.ERROR_CRMLIST
            })
        }
    })
};