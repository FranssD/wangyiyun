import axios from "axios";
//banner
export function _getBanner(data) {
   return axios.get('http://localhost:8000/banner' + data)
}
//推荐歌单
export function _getPersonalized(data) {
   return axios.get('http://localhost:8000/personalized' + data)
}
//新碟上架
export function _getTopAlbum(data) {
   return axios.get('http://localhost:8000/top/album' + data)
}

//新碟上架
export function _getTopSong(data) {
   return axios.get('http://localhost:8000/top/song' + data)
}

//热门电台
export function _getDjHot(data) {
   return axios.get('http://localhost:8000/dj/hot' + data)
}

//热门电台
export function _getTopList(data) {
   return axios.get('http://localhost:8000/top/list' + data)
}

//音乐是否可用
export function _getCheckMusic(data) {
   return axios.get('http://localhost:8000/check/music' + data)
}

//获取音乐 url
export function _getSongUrl(data) {
   return axios.get('http://localhost:8000/song/url' + data)
}