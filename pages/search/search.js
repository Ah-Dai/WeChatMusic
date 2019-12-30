// pages/search/search.js
import { getRequest } from '../../utils/request.js';
import { setStorageSync, getStorageSync } from '../../utils/util.js';
import { showToast, showLoading, hideLoading, } from '../../utils/wx-notice.js';
import { DisposeSong } from '../../utils/customClass.js'
Page({
  data: {
    searchValue: null,
    topSearch: true,
    footerToggle: true
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

    this.unifySearchRequest({
      keywords: searchValue,
      limit: 30,
      offset: 0,
    })
    // getRequest({
    //   url: `/search?keywords=${searchValue}`
    // }).then( (res) => {
    //   hideLoading();
    //   const po = new DisposeSong({
    //     hotSongs: res.result.songs
    //   });
    //   _this.setData({
    //     topSearch: false,
    //     search: po.artistName()
    //   })
    // })
  },

  limit(e){
    console.log(e);
    const { detail } = e;
    const { searchValue } = this.data;
    
    this.unifySearchRequest({
      keywords: searchValue,
      limit: 30,
      offset: detail.offset,
      hotSongs: detail.hotSongs
    })
  },

  unifySearchRequest(options){
    const _this = this;
    showLoading({});
    getRequest({
      url: `/search?keywords=${options.keywords}&limit=${options.limit}&offset=${options.offset}`,
    }).then( (res) => {
      hideLoading();
      if(res.result.hasOwnProperty('songs') === false){
        showToast({
          title: '没有更多了',
          icon: 'none'
        });
        return _this.setData({
          footerToggle: false
        })
      }

      const po = new DisposeSong({
        hotSongs: res.result.songs
      });

      let po_hotSongs = po.artistName();
      if(options.hotSongs){
        po_hotSongs = options.hotSongs.concat(po_hotSongs);
      };

      _this.setData({
        topSearch: false,
        hotSongs: po_hotSongs
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
        topSearch: true,
        footerToggle: true
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
        topSearch: true,
        footerToggle: true
      })
    }
    this.setData({
      searchValue: null,
    })
  },
})