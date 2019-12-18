function request(options){
  const getApp = getApp();
  return new Promise((resolve,reject) => {
    wx.request({
      url: getApp.globalData + options.url,
      data: options.data,
      method: options.method,
      success(res){
        resolve(res)
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