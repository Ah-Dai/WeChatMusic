function showToast(options){
  return wx.showToast({
    title: options.title,
    icon: options.icon,
    duration: options.duration || 1000,
    mask: true
  })
}

function hideToast(){
  return wx.hideToast();
}

function showLoading(title){
  return wx.showLoading({
    title: title || 'Loading...',
    mask: true,
  })
}

function hideLoading(){
  return wx.hideLoading();
}

module.exports = {
  showToast,
  hideToast,
  showLoading,
  hideLoading,
}