Component({

  methods:{
    outflowId(){
      console.log('123')
      // this.triggerEvent('receiveId',)
      wx.navigateTo({
        url: '/pages/singer-page/singer-page',
        fail(err){
          console.log(err)
        }
      })
    }
  },

  options: {
    styleIsolation: 'apply-shared'
  }
})