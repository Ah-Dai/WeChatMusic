const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



class Usertest{
  constructor(user){
    this.user = user
  }

  phoneTest(phone){
    if(this.user.phone !== phone){
      return false
    }
    return true
  }

  pswTest(psw) {
    if (this.user.psw !== psw) {
      return false
    }
    return true
  }
}

module.exports = {
  formatTime: formatTime,
  User: Usertest
}
