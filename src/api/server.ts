import axios from "axios";
import { Toast } from 'antd-mobile';
import { publicIp} from './apiUrl';

let instance:any = axios.create({
    timeout: 10000,
    baseURL: publicIp
})
instance.defaults.headers.post['Content-Type'] = 'application/json'

/** 添加请求拦截器 **/
instance.interceptors.request.use((config: any) => {
    // 在这里：可以根据业务需求可以在发送请求之前做些什么
    return config
}, (error: any) => {
    return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use((response: { data: { code: number; message: any; }; }) => {
    if (response.data.code === 200) {
        return Promise.resolve(response.data)
    } else {
        Toast.fail('响应超时')
        return Promise.reject(response.data.message)
    }
}, (error: { response: { data: { message: any; }; }; }) => {
    if (error.response) {
        let tips = error.response.data.message
        Toast.fail(tips)
        return Promise.reject(error)
    } else {
        Toast.fail('请求超时, 请刷新重试')
        return Promise.reject('请求超时, 请刷新重试')
    }
})

/* 统一封装get请求 */
export const get = (url: any, params?: any, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            params,
            ...config
        }).then((response: any) => {
            resolve(response)
        }).catch((error: any) => {
            reject(error)
        })
    })
}

/* 统一封装post请求  */
export const post = (url: any, data: any, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            data,
            ...config
        }).then((response: any) => {
            resolve(response)
        }).catch((error: any) => {
            reject(error)
        })
    })
}