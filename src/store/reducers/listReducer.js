import { actions } from "../../constant";

export function listReducer(state = {},action){
    switch (action.type) {
        case actions.CRMLIST:
            //异步的action
            return Object.assign({},state,action);
        case actions.SUCCESS_CRMLIST:
            const {data} = action
            return{
                status:1,
                data:data
            };
            case actions.ERROR_CRMLIST:
                return{
                    status:2,
                };
        default:
            return state;
    }
   
}