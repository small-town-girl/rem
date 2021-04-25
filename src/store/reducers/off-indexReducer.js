import { actions } from "../../constant";

export function offIndexReducer(state = {},action){
    switch (action.type) {
        case actions.OFF_INDEX:
            return Object.assign({},state,action)
        case actions.SUCCESS_INDEX:
            const {data} = action;
            return{
                status:1,
                data:data
            }
        case actions.ERROR_INDEX:
            return{
                status:2
            };
            default:
            return state;
    } 
}