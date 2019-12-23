// pages/search/search.js
import { request } from '../../utils/request.js';
import { setStorageSync, getStorageSync } from '../../utils/util.js';
import { showToast, showLoading, hideLoading, } from '../../utils/wx-notice.js';
import { DisposeSong } from '../../utils/customClass.js'
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
    const _this = this;
    if (!searchValue){
      return showToast({
        title: '关键字不能为空！',
        icon: 'none'
      })
    }

    showLoading({});
    request({
      url: `/search?keywords=${searchValue}`
    }).then( (res) => {
      hideLoading();
      const po = new DisposeSong({
        hotSongs: res.result.songs
      });
      _this.setData({
        topSearch: false,
        search: po.artistName()
      })
    })
  },

  hotSearchTap(e){
    let { currentTarget } = e;
    this.setData({
      searchValue: currentTarget.dataset.name
    })
    this.confirmSearch()
  },

  searchInput(e) {
    let { detail } = e;
    if (this.data.topSearch === false && !detail.value) {
      return this.setData({
        topSearch: true
      })
    }
    this.setData({
      searchValue: detail.value
    })
  },

  hiddenTopSearch(){
    if(!this.data.topSearch){
      return this.setData({
        searchValue: null,
        topSearch: true
      })
    }
    this.setData({
      topSearch: false
    })
  },
})