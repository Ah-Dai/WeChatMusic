// pages/song-detail/song-detail.js
import { Song } from '../../utils/customClass.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 10,
    op: 'running'
  },

  onLoad(){
    // const song = new Song(33894312)
    // song.checkMusic((item) => {
    //   console.log(item)
    // })
  },

  sliderChange(e){
    console.log(e)
  },

  dod(){
    let op = 'running';
    if (this.data.op === 'running'){
      op = 'paused'
    }
    this.setData({
      op: op
    })
    // let doxx = this.data.doxx;
    // let _this = this;
    // let op = setInterval(function(){
    //   let value = _this.data.value;
    //   if (value === 5) {
    //     clearInterval(op)
    //     return _this.setData({
    //       value: 0,
    //       doxx: null
    //     })
    //   }
    //   _this.setData({
    //     value: value + 1
    //   })
    // }, 1000)

    // this.setData({
    //   doxx: op
    // })
  }
})