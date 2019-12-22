// pages/search/search.js
import { request } from '../../utils/request.js';
import { setStorageSync, getStorageSync } from '../../utils/util.js';
import { showToast } from '../../utils/wx-notice.js'
Page({
  data: {
    searchValue: null,
    topSearch: true,
  },

  onLoad(options) {
    const _this = this;
    const search_hot_detail = getStorageSync('search_hot_detail');
    if (!search_hot_detail){
      request({
        url: '/search/hot/detail'
      }).then((res) => {
        setStorageSync('search_hot_detail', res.data);
        _this.setData({
          hotSearch: res.data
        })
      })
    }else{
      this.setData({
        hotSearch: search_hot_detail
      })
    }
  },

  confirmSearch() {
    const { searchValue } = this.data;
    if (!searchValue){
      return showToast({
        title: '关键字不能为空！',
        icon: 'none'
      })
    }
    
    this.setData({
      topSearch: false
    })
  },

  searchInput(e) {
    let { detail } = e;
    this.setData({
      searchValue: detail.value
    })
  },
})