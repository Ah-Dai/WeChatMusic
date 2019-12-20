Component({
  properties: {
    offset: Number
  },

  observers: {
    'offset'(e){
      let arr = this.data.songlist;
      const length = e + 10;
      // console.log(length)
      // console.log(e)
      for (let i = 1; i <= length; i++) {
        arr.push({
          id: i,
          name: '小明' + i,
          songSrc: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          songName: '万万没想到'
        })
      }
      this.setData({
        songlist: arr
      })
    }
  },

  data: {
    songlist: []
  },

  lifetimes: {
    attached(){
      
    }
  },

  options: {
    addGlobalClass: true
  }
})