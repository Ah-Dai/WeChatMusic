// pages/login/login.js
import { User } from '../../utils/util.js'
import { showToast } from '../../utils/wx-notice.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onInput(event){
    let { detail, target } = event
    this.setData({
      [target.dataset.name]: detail.value
    })
  },

  signin(){
    const user = new User({
      phone: this.data.phone,
      psw: this.data.psw
    })
    if (user.phoneTest('130') === false || user.pswTest('1') === false){
      return showToast({
        title: 'No',
        icon: 'none',
        image: '',
        duration: 1000
      })
    }
    app.globalData.userInfo = {
      name: '小明',
      age: 18
    }
    wx.navigateBack({
      
    })
  }
})