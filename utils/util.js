function setStorageSync(key, data){
  return wx.setStorageSync(key, data);
}

function getStorageSync(key){
  return wx.getStorageSync(key);
}

function removeStorageSync(key){
  return wx.removeStorageSync(key);
}

function clearStorageSync(){
  return wx.clearStorageSync();
}

module.exports = {
  getStorageSync,
  setStorageSync,
  removeStorageSync,
  clearStorageSync,
}
