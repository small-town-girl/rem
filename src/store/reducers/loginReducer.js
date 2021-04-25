import { actions } from "../../constant";

export function loginReducer(state = {},action){
    switch (action.type){
        case actions.LOGIN:
            return Object.assign({},state,action);
        case actions.SUCCESS_LOGIN:
            const {token} = action;
            localStorage.setItem('token',JSON.stringify(token));
            //通知前台页面登录成功
            return {status:1};
        case actions.ERROR_LOGIN:
            return {status:2};
        default :
        return state;
    }
    
}