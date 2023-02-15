import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from "unplugin-vue-components/resolvers";
import { resolve} from 'path';
// import * as process from "process";


function pathResolve(dir: string) {
    // 获取绝对定位的方法
    return resolve(process.cwd(),'.',dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Components({
        resolvers:[NaiveUiResolver()]
      })
  ],
    resolve:{
      alias:[
          {
              // 简化路径前缀，使用绝对地址
              find:'@',
              replacement:(pathResolve('src'))
          }
      ]
    },
    server: {
        host: 'localhost',
        port: 8000
    }
})
