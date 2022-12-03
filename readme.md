# 快速上手

## 安装

```sh
npm i vuex-uniapp-persistence
```

## 引入

`store.js` 引入

```js
// 页面路径：store/index.js
import Vue from "vue";
import Vuex from "vuex";
import persistence from "./plugins/persistence";
Vue.use(Vuex);
const store = new Vuex.Store({
  // 使用模块
  plugins: [persistence()],
});
export default store;
```

## api

### persistence(key)

**key** 是你设置 本地存储的 key 的名称，如果不传，默认就是 `vuex-uniapp-persistence`

## 更新日志

### 1.0.1

将本地存储完全替换 state 修改为 合并本地存取和 state 融合到 vuex 中

## 联系我

- yeah126139163@163.com
- https://github.com/itcastWsy/vuex-uniapp-persistence
