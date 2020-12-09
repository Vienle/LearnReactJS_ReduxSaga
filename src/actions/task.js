import * as taskApis from './../apis/task'
import * as Types from './../contants/task'


export const loadTasklist = () =>{
    return {
        type : Types.FETCH_TASK,
        payload : {
            
        }
    }
};
export const fetchListTaskSuccess = data =>{
    return {
        type : Types.FETCH_TASK_SUCCESS,
        payload : {
            data : data
        }
    }
};
export const fetchListTaskFaild = error =>{
    console.log('12',error)
    return {
        
        type : Types.FETCH_TASK_FAILED,
        payload : {
            response : error.data
        }
    }
};

export const fetchListTaskRequest = () =>{
    return dispatch => {
        taskApis
            .getList()
            .then(resp => {
                dispatch(loadTasklist);
                dispatch(fetchListTaskSuccess(resp.data));
            })
            .catch(error => {
                dispatch(fetchListTaskFaild(error));
            })
    };
};