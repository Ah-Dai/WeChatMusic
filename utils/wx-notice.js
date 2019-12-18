function showToast(options){
  return wx.showToast({
    title: options.title,
    icon: options.icon,
    duration: options.duration,
    mask: true
  })
}

module.exports = {
  showToast: showToast
}