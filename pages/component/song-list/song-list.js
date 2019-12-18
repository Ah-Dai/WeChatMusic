Page({
  data: {
    songlist: []
  },
  onLoad(){
    let arr = []
    for(let i = 1; i <= 20; i++){
      arr.push({
        id: i,
        name: '小明'+ i,
        songSrc: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
        songName: '万万没想到'
      })
    }
    this.setData({
      songlist: arr
    })
  }
})