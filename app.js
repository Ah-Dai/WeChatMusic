//app.js
App({
  onLaunch: function () {
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
    })
  },
  
  globalData: {
    pathUrl: 'http://192.168.101.56:3000',
    userInfo: null
  }
})