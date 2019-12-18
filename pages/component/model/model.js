Component({
  properties: {
    modelName: String
  },

  methods:{
    hideModal(){
      this.setData({
        modelName: null
      })
      // this.triggerEvent('hideMoel')
    }
  },

  options: {
    styleIsolation: 'apply-shared'
  }
})