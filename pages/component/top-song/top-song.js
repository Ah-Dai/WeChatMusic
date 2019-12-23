import { request } from '../../../utils/request.js'
Component({
  properties: {
    hotSongs: Object,
    scrollHeight: Number,
    footerText: String,
  },
  
  methods: {
    doxx(){
      console.log(request)
    }
  },

  options: {
    addGlobalClass: true
  }
})