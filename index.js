const _ = require("lodash/fp/object");
export default (key = "vuex-uniapp-persistence") => {
  return function (store) {
    // 当 store 初始化后调用
    const value = uni.getStorageSync(key);
    if (value) {
      store.replaceState(_.merge(store.state, value));
    }
    store.subscribe((mutation, state) => {
      uni.setStorageSync(key, state);
    });
  };
};
