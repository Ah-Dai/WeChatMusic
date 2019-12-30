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

class SingerCache{
  
}

module.exports = {
  DisposeSong
}