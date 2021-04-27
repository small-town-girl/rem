import { call, put, takeEvery } from "redux-saga/effects";
import { actions,listCount } from "../../constant";
import instance from "../../sercice/request";

export function* offindexSaga(){
    yield takeEvery(actions.OFF_INDEX,function* (){
        try{
            const res = yield call(instance.post,'http://crm.cimns.com/index.php/oa/index/index','type='+listCount.type+'&page='+listCount.page+'&limit=15')
            if(res.code === 200){
                yield put({
                    type:actions.SUCCESS_INDEX,
                    data:[...res.data.list]
                })
            }
        }catch(error){
            yield put({
                type:actions.ERROR_INDEX
            })
        }
    })
}