import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../contants/index';

const url = 'Tasks';

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}