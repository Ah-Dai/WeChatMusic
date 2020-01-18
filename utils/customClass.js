import { getRequest } from './request.js'
import { showToast, showLoading, hideLoading } from './wx-notice.js'

class DisposeSong{
  constructor(options){
    this.songs = options.hotSongs;
    this.artist = options.artist;
  }

  artistName(){
    const songs = this.songs;
    let _songs = [];
    let obj = {};
    for(let i = 0; i < songs.length; i++){
      let item = songs[i];
      obj = {
        id: item.id,
        mv: item.mv || item.mvid,
        al: item.al || item.album,
        name: item.name,
        alia: item.alia || item.alias,
        singerName: ''
      }
      let ar = item.ar || item.artists;

      if (ar === 1){
        obj.singerName = item.ar[0].name;
        _songs.push(obj);
        continue
      }
    
      for(let j = 0; j < ar.length; j++){
        if(j === ar.length-1){
          obj.singerName += ar[j].name;
          continue
        }
        obj.singerName += `${ar[j].name} / `;
      }
      _songs.push(obj);
    }
    return _songs
  }

  artistInfo(){
    return this.artist
  }
}

class SingerCache{}

class Song{
  constructor(id){
    this.id = id;   //音乐id
  }

  playMusic(id) {
    getRequest({
      url: '/song/detail',
      data: {
        ids: id
      }
    }).then(res => {
      console.log(id);
      hideLoading();
      const code = res.code;
      if(code === 200){
        const song = res.songs[0];
        const ar = song.ar[0];
        const getBackgroundAudioManager = wx.getBackgroundAudioManager();
        getBackgroundAudioManager.singe = ar.name;
        getBackgroundAudioManager.title = song.name;
        getBackgroundAudioManager.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
        // 专辑
        getBackgroundAudioManager.epname = song.al.name;
        getBackgroundAudioManager.coverImgUrl = song.al.picUrl;
      }
    })
  }

  // 音乐是否可用
  checkMusic(callback){
    const _this = this;
    const id = this.id;
    showLoading()
    getRequest({
      url: '/check/music',
      data: {
        id: id
      }
    }).then(res => {
      let success = res.success;
      if (success){
        _this.playMusic(id)
        return success
        // return callback(success)
      }else{
        hideLoading();
        showToast({
          title: res.message,
          icon: 'none'
        })
      }
    })
  }
}

class PlayList{
  constructor(){}

  catlist(obj){
    if (("categories" in obj) === false){
      return false
    }
    const categories = obj.categories;
    const obj_sub = obj.sub;
    const arr = [];
    for(let key in categories){
      arr.push({
        category: Number(key),
        name: categories[key],
        sub: []
      })
    }
    for(let i = 0; i < arr.length; i++){
      for (let j = 0; j < obj_sub.length; j++) {
        if (arr[i].category === obj_sub[j].category){
          arr[i].sub.push(obj_sub[j])
        }
      }
    }
    // arr
    return arr
  }
}

module.exports = {
  DisposeSong,
  Song,
  PlayList
}