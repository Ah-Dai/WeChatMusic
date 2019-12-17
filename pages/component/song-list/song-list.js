Component({
  data: {
    songList: [{
        id: 0,
        name: '李荣浩',
        songName: '麻雀',
        songSrc: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png'
      }, {
        id: 1,
        name: '陈奕迅',
        songName: '十年',
        songSrc: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png'
      }, {
        id: 2,
        name: '林俊杰',
        songName: '点一把火炬',
        songSrc: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png'
      }, {
        id: 3,
        name: '陈奕迅',
        songName: '相信你的人',
        songSrc: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png'
      }, {
        id: 4,
        name: '陈奕迅',
        songName: '绵绵',
        songSrc: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png'
      }, {
        id: 5,
        name: '陈奕迅',
        songName: '时光隧道',
        songSrc: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png'
      }]
  },
  
  methods: {
    onTap(event){
      let { currentTarget } = event
      this.triggerEvent('mySongid', currentTarget.dataset)
    }
  },

  options: {
    styleIsolation: 'apply-shared'
  }
})