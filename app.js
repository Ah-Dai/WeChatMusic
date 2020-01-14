//app.js
import { getStorageSync, setStorageSync, clearStorageSync } from '/utils/util.js'
App({
  onLaunch() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.ScreenHeight = e.screenHeight;
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();

        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    });

    const timestamp = Date.parse(new Date);
    const expiration_data = getStorageSync('expiration_data');
    if (!expiration_data) {
      const expiration = timestamp + 86400000;  // 一天 按毫秒算
      setStorageSync('expiration_data', expiration);
    } else {
      if (expiration_data < timestamp){
        console.log('已超过一天，清除所有数据缓存')
        clearStorageSync();
      }
    }
  },

  onShow() {
    
  },
  
  globalData: {
    // pathUrl: 'http://localhost:3000',
    pathUrl: 'http://192.168.101.56:3000',
    userInfo: null
  }
})