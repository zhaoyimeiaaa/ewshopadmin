import {defineStore} from "pinia";
import {login,getUserInfo} from "@/api/auth";

// 定义state中的数据类型
export interface IUserState {
    token: string;
    username: string;
    avatar_url: string;
    permissions: string[];
    info: any;
}

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore({
    id:'app-user',
    state:(): IUserState => ({
        token: localStorage.getItem('token') || '',// 在页面刷新时已经保留token
        username:'',
        avatar_url:'',
        permissions:[],
        info:{},
}),
    getters: {
        // 接受
        getToken(): string {
            return this.token;
        },
        getAvatar(): string {
            return this.avatar_url;
        },
        getUserName(): string {
            return this.username;
        },
        getPermissions(): string[] {
            return this.permissions;
        },
    },
    actions: {
        // 设置token
        setToken(token: string) {
            // sessionStorage.setItem('token',token); // 一开新的窗口,token就会消失
            // token本地储存  localStarage本地存储
            localStorage.setItem('token',token);
            this.token = token;
        },
        // 设置用户信息
        setAvatar(avatar_url: string){
            this.avatar_url = avatar_url;
        },
        setUserInfo(info: object){
            this.info = info;
        },
        setUserName(username: string){
            this.username = username;
        },
        setPermissions(permissions: string[]){
            this.permissions = permissions;
        },
        //异步的登陆方法
        async login(userInfo: object) {
            try {
                const response = await login(userInfo);
                console.log(response);
                if (response.access_token) {
                    this.setToken(response.access_token);
                    // 登录之后，token已经拿到了，然后getUser获取调用,
                    //return await this.getUser();
                }
            } catch (error) {
                // console.log(error);
            }
        },

        // 异步的获取用户信息方法
        async getUser() {
             try {
                const response: any = await getUserInfo();
                console.log(response);
                if (response) {
                    this.setUserName(response.username);
                    this.setUserInfo(response);
                    this.setAvatar(response.permissions);
                }
            } catch (error) {
                // console.log(error);
            }
        }
    }
});