const app = getApp();
import { request } from '../../utils/request.js'
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,

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
    categoryCode: '华语男歌手'
  },

  onLoad(){
    let { category, code } = this.data;
    this.gainArtist(category, code);
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
  },

  onReady() {
    wx.hideLoading()
  },

  gainArtist(category,code){
    const _this = this;
    const cat = category + code;
    request({
      url: `/artist/list?cat=${cat}&limit=${10}`,
    }).then((res) => {
      console.log(res)
      _this.setData({
        artists: res.artists
      })
    })
  },

  gainCategoryCode(e){
    let { detail } = e;
    let name = detail.value.length == 3 ? 'category' : 'code';

    this.setData({
      [name]: detail.value
    });

    let { category, code, multiArray } = this.data;
    this.gainArtist(category, code);

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