const app = getApp()
Component({

  data: {
    
  },

  lifetimes: {
    attached(){
      this.setData({
        userinfo: app.globalData.userInfo
      })
    }
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show(){
      this.setData({
        userinfo: app.globalData.userInfo
      })
    },
  },

  methods: {
    login(){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  },

  options: {
    styleIsolation: 'apply-shared'
  }
})