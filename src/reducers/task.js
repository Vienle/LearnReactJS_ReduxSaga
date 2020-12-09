import * as Types from './../contants/task'
import * as Toastify from './../helpers/toastify'
const initialState = [];

const reducer = (state = initialState,action) => {
    switch(action.type){
        case  Types.FETCH_TASK:
            return{
                ...state,
                listTask : []                
            }  ;
        case  Types.FETCH_TASK_SUCCESS:
            const {data} =  action.payload;
            return{
                ...state,
                listTask : data                
            }
            case  Types.FETCH_TASK_FAILED:
                
                Toastify.toastError({
                    status : 404,
                    message : 'Lỗi CMNR'
                })
                return{
                    ...state,
                    listTask : []                
                }           
        default:
            return state;
    }
};

export default reducer;