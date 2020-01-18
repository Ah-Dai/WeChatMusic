// pages/songMenu/classify/classify.js
import { getStorageSync, setStorageSync } from '../../../utils/util.js'
import { getRequest } from '../../../utils/request.js'
import { PlayList } from '../../../utils/customClass.js'

Page({

  // 页面的初始数据
  data: {
    iconList: [{
        icon: 'cardboardfill',
        color: 'red',
        badge: 120,
        name: 'VR'
      }, {
        icon: 'recordfill',
        color: 'orange',
        badge: 1,
        name: '录像'
      }, {
        icon: 'picfill',
        color: 'yellow',
        badge: 0,
        name: '图像'
      }, {
        icon: 'noticefill',
        color: 'olive',
        badge: 22,
        name: '通知'
      }, {
        icon: 'upstagefill',
        color: 'cyan',
        badge: 0,
        name: '排行榜'
      }, {
        icon: 'clothesfill',
        color: 'blue',
        badge: 0,
        name: '皮肤'
      }, {
        icon: 'discoverfill',
        color: 'purple',
        badge: 0,
        name: '发现'
      }, {
        icon: 'questionfill',
        color: 'mauve',
        badge: 0,
        name: '帮助'
      }, {
        icon: 'commandfill',
        color: 'purple',
        badge: 0,
        name: '问答'
      }, {
        icon: 'brandfill',
        color: 'mauve',
        badge: 0,
        name: '版权'
    }]
  },

  onLoad(){
    const playlist_catlist = getStorageSync('playlist_catlist');
    const _this = this;
    if (playlist_catlist){
      console.log(playlist_catlist);
      this.setData({
        catlist: playlist_catlist
      })
    }else{
      getRequest({
        url: '/playlist/catlist'
      }).then(res => {
        console.log(res);
        const code = res.code;
        if(code === 200){
          const playlist = new PlayList();
          const catlist = playlist.catlist(res);
          setStorageSync('playlist_catlist', catlist);
          _this.setData({
            catlist: catlist
          })
        }
      })
    }
  }
})