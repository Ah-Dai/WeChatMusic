const app = getApp();
import { request } from '../../utils/request.js';
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    categories: [{
        id: "0",
        value: "语种"
      }, {
        id: "1",
        value: "风格"
      }, {
        id: "2",
        value: "场景"
      }, {
        id: "3",
        value: "情感"
      }, {
        id: "4",
        value: "主题"
    }],
    modalName: false,
    TabCur: 0,
    scrollLeft: 0
  },
  
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  onLoad(){
    // let sub = wx.getStorageSync('catlistSub');
    // const _this = this;
    // if(sub){
    //   // console.log(sub);
    //   this.setData({
    //     catlistSub: sub
    //   })
    // }else{
    //   request({
    //     url: '/playlist/catlist'
    //   }).then( (res) => {
    //     console.log(res);
    //     wx.setStorageSync('catlistSub', res.sub);
    //     _this.setData({
    //       catlistSub: res.sub
    //     })
    //   })
    // }
  },

  // doxx(e){
  //   const catlistSub = this.data.catlistSub;
  //   const { currentTarget } = e;
  //   let arr = [];
  //   for(let i = 0; i < catlistSub.length; i++){
  //     if (currentTarget.dataset.id == catlistSub[i].category){
  //       arr.push(catlistSub[i])
  //     }
  //   }
  //   this.setData({
  //     arr,
  //     modalName: true
  //   })
  // },

  // hideModal(e) {
  //   this.setData({
  //     modalName: false
  //   })
  // },
})