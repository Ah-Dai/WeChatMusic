function request(options){
  const app = getApp();
  return new Promise((resolve,reject) => {
    wx.request({
      url: app.globalData.pathUrl + options.url,
      data: options.data,
      method: options.method,
      success(res){
        resolve(res.data)
      },
      fail(err){
        reject(err)
      }
    })
  })
}


module.exports = {
  request: request
}