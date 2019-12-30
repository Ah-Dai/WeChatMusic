// pages/song-detail/song-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0
  },

  onLoad(){
  },

  sliderChange(e){
    console.log(e)
  },

  dod(){
    
    let doxx = this.data.doxx;
    let _this = this;
    let op = setInterval(function(){
      let value = _this.data.value;
      if (value === 5) {
        clearInterval(op)
        return _this.setData({
          value: 0,
          doxx: null
        })
      }
      _this.setData({
        value: value + 1
      })
    }, 1000)

    this.setData({
      doxx: op
    })
  }
})