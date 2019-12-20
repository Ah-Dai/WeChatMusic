function showToast(options){
  return wx.showToast({
    title: options.title,
    icon: options.icon,
    duration: 1000,
    mask: true
  })
}

module.exports = {
  showToast,
}