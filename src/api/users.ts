import request from "@/utils/request";
/**
 * @description: 用户列表
 * @param params
 * */
export function users(params: object) {
    return request(
        {
            url:"/api/admin/users",
            method:"GET",
            params,
        }
    );
}
//添加用户
export  function addUser(data: object) {
    return request(
        {
            url: "/api/admin/users",
            method: "POST",
            data,
        }
    );
}

// 禁用和启用
export  function getUserLock(userid: number) {
    return request(
        {
            url: `/api/admin/users/${userid}/lock`,
            method: "PATCH"
        }
    );
}

export  function getUserInfo(userid: number) {
    return request(
        {
            url: `/api/admin/users/${userid}`,
            method: "GET",
        }
    );
}

export  function updateUser(userid: number, data: object) {
    return request(
        {
            url: `/api/admin/users/${userid}`,
            method: "PUT",
            data
        }
    );
}