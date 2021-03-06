const app = getApp();
import { request } from '../../utils/request.js';
import { setStorageSync, getStorageSync, ArtistList } from '../../utils/util.js';
import { showToast, showLoading, hideLoading } from '../../utils/wx-notice.js';
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ScreenHeight: app.globalData.ScreenHeight - (app.globalData.CustomBar * 2) + app.globalData.StatusBar,

    multiArray: [
      [{
          name: '华语',
          value: '100',
          checked: 'true'
        }, {
          name: '欧美',
          value: '200',
        }, {
          name: '日本',
          value: '600',
        }, {
          name: '韩国',
          value: '700',
        }, {
          name: '其他',
          value: '400',
      }],
      [{
          name: '男',
          value: '1',
          checked: 'true'
        },{
          name: '女',
          value: '2'
        }, {
          name: '乐队/组合',
          value: '3'
      }]
    ],

    category: '100',
    code: '1',
    categoryCode: '华语男歌手',
    artists: [],
    offset: 0
  },

  onLoad(){
    let { category, code } = this.data;
    this.gainArtist({
      cat: category + code,
      offset: 0
    });
    showLoading()
  },

  onReady() {
    wx.hideLoading();
  },

  skipDetails(e){
    const { currentTarget } = e;
    wx.navigateTo({
      url: `/pages/singer-details/singer-details?id=${currentTarget.dataset.id}`,
    })
  },

  // 请求
  gainArtist(options){
    const _this = this;
    let artists = this.data.artists;
    let cat = options.cat;
    let offset = options.offset;
    showLoading();

    request({
      url: `/artist/list?cat=${options.cat}&limit=${15}&offset=${offset}`,
    }).then((res) => {
      hideLoading();
      if (res.more === false) {
        return _this.setData({
          more: res.more,
        })
      }

      for (let i = 0; i < res.artists.length; i++) {
        artists.push(res.artists[i]);
      };

      _this.setData({
        artists,
      })
    })
  },

  // scroll-view 滑到底部事件
  offsetUpdate() { 
    const { offset, category, code, more } = this.data;
    let _offset = offset + 15
    if(more === false) return

    this.gainArtist({
      cat: category + code,
      offset: _offset
    });

    this.setData({
      offset: _offset,
    });
  },

  // 侧边栏单选框事件
  gainCategoryCode(e){
    let { detail } = e;
    let name = detail.value.length == 3 ? 'category' : 'code';

    this.setData({
      [name]: detail.value,
      artists: []
    });

    let { category, code, multiArray } = this.data;
    this.gainArtist({
      cat: category + code,
      offset: 0
    });

    let artistname = multiArray[0].filter(item => { return category === item.value });
    let artistsex = multiArray[1].filter(item => { return code === item.value });
    let sort = artistsex[0].name !== '3' ? `${artistsex[0].name}歌手` : artistsex[0].name;

    this.setData({
      categoryCode: artistname[0].name + sort
    })
    
  },

  // 侧边栏显示
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  // 侧边栏隐藏
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
});