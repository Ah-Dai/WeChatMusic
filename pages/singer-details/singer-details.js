// pages/singer-details/singer-details.js
const app = getApp();
import { showToast, showLoading } from '../../utils/wx-notice.js'
import { request } from '../../utils/request.js'
import { DisposeSong } from '../../utils/customClass.js'
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
    offserIndex: 0,
    topSonglist: [],
  },

  onLoad(option){
    const _this = this;
    showLoading();
    request({
      url: `/artists?id=${option.id}`
    }).then( (res) => {
      console.log(res)
      const doxx = new DisposeSong(res);
      _this.setData({
        hotSongs: doxx.artistName(),
        artist: doxx.artistInfo()
      })
    })
  },

  onReady() {
    wx.hideLoading();
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
})