import axios from "axios";
//banner
export function _getBanner(data) {
   return axios.get('http://localhost:8000/banner' + data)
}
//推荐歌单
export function _getPersonalized(data) {
   return axios.get('http://localhost:8000/personalized' + data)
}

//新歌
export function _getTopSong(data) {
   return axios.get('http://localhost:8000/top/song' + data)
}

//全部新碟
export function _getAlbumNew(data) {
   return axios.get('http://localhost:8000/album/new' + data)
}

//热门电台
export function _getDjHot(data) {
   return axios.get('http://localhost:8000/dj/hot' + data)
}

//热门电台
export function _getTopPlaylistHighquality(data) {
   return axios.get('http://localhost:8000/top/playlist/highquality' + data)
}

//音乐是否可用
export function _getCheckMusic(data) {
   return axios.get('http://localhost:8000/check/music' + data)
}

//获取音乐 url
export function _getSongUrl(data) {
   return axios.get('http://localhost:8000/song/url' + data)
}