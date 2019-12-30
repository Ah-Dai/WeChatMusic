Component({
  properties: {
    hotSongs: Object,
    scrollHeight: Number,
    footerText: String,
    footerToggle: Boolean
  },
  
  data: {
    offset: 30,
  },

  methods: {
    doxx(){
      let { footerText, offset, hotSongs } = this.data
      if(footerText === '点击加载'){
        let detail = {
          offset: offset,
          hotSongs: hotSongs
        };
        this.triggerEvent('limit',detail);
        this.setData({
          offset: offset += 30
        })
      }
    }
  },

  options: {
    addGlobalClass: true
  }
})