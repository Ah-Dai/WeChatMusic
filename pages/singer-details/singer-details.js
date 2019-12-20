// pages/singer-details/singer-details.js
const app = getApp();
import { showToast } from '../../utils/wx-notice.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    navTabs: [{
      name: '单曲',
    },{
      name: '专辑',
    },{
      name: 'MV',
    },{
      name: '信息'
    }],
    offserIndex: 0
  },

  tabSelect(e) {
    const { currentTarget } = e;
    const id = currentTarget.dataset.id;
    if(id != '0'){
      return showToast({
        title: '此功能暂未开通',
        icon: 'none'
      })
    }
    this.setData({
      TabCur: id,
      scrollLeft: (id - 1) * 60
    })
  },

  doxx(){
    this.setData({
      offserIndex: this.data.offserIndex + 10
    })
  }
})