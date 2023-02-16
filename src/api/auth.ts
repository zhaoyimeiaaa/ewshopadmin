import request from '@/utils/request';

// 登录接口
export function login(data: object) {
    return request({
        url: '/api/auth/login',
        method: 'post',
        data
    })
}

//获取用户信息
export function getUserInfo() {
    return request({
        url: 'api/auth/info',
        method:'get'
    })
}