import React from 'react';
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import { NavLink } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import './index.css';
import { _getBanner, _getPersonalized, _getTopAlbum, _getTopSong,_getDjHot ,_getTopList} from '../../../server'


class Home extends React.Component {
	static propTypes = {}
	static defaultProps = {}
	constructor(props) {
		super(props)
		this.state = {
			bannerList: [],
			date: '',
			resultList: [],
			albumsList: [],
			topSongList: [],
			styleId:0,
			personalized:[],
			DjHotList:[],
			_W_TopList:'',
			TopListArray:[],
			__Header:{
				microphone:true,
				QRcode:false,
				search:true
			}
		}
	}
	componentWillMount(e) {
		console.log('在渲染前调用,在客户端也在服务端。')
	}
	render() {
		console.log('render')
		return (
			<section className="Home _ptop54">
				<Header default={this.state.__Header}/>
				<Nav />
				<Banner bannerList={this.state.bannerList} />
				<nav className='menu _contentM94 _mbot20'>
					<NavLink to='/vide'>
						<i className='icon _iconfont'>&#xe638;</i>
						<span>每日推荐</span>
						<i className='number'>{this.state.date}</i>
					</NavLink>
					<NavLink to='/me'>
						<i className='icon _iconfont'>&#xe610;</i>
						<span>歌单</span>
					</NavLink>
					<NavLink to='/me'>
						<i className='icon _iconfont'>&#xe749;</i>
						<span>排行榜</span>
					</NavLink>
					<NavLink to='/me'>
						<i className='icon _iconfont'>&#xe65e;</i>
						<span>电台</span>
					</NavLink>
					<NavLink to='/me'>
						<i className='icon _iconfont'>&#xe652;</i>
						<span>直播</span>
					</NavLink>
				</nav>
				<i className="_line"></i>
				<section className="_contentM94 _mtop20">
					<div className="_titlePlate">
						<span className='minTitpe'>推荐歌单</span>
						<h2 className='title'>推荐歌单</h2>
						<NavLink to='/me' className="borderNavlink">查看更多</NavLink>
					</div>
					<div className='recommendList _mtop10'>
						<ul className="">
							{
								this.state.resultList.map((item, i) => {
									return (
										<li className="" key={i} >
											<div className='playCount'>
												<i className='_iconfont icon'>&#xe774;</i>
												{Math.ceil(item.playCount / 10000)}万
											</div>
											<figure className="pic">
												<img src={item.picUrl} alt='' />
											</figure>
											<h3 className="name _TexTrow2">{item.name}</h3>
										</li>
									)
								})
							}

						</ul>
					</div>
				</section>
				<section className="_contentM94 _mtop20">
					<div className="_titlePlate">
						<span className='minTitpe'>4月1日</span>
						<h2 className='title'>
							<span onClick={this.onClickTabSong.bind(this, 0)} className={this.state.styleId===0?'active':''}>新碟</span>
							<span onClick={this.onClickTabSong.bind(this, 1)} className={this.state.styleId===1?'active':''}>新歌</span>
						</h2>
						<NavLink to='/me' className="borderNavlink">歌单广场</NavLink>
					</div>
					<div className='newsMusic _mtop20'>
						<ul className={['disc',this.state.styleId===0?' active':''].join('')}>
							{
								this.state.albumsList.map((item, i) => {
									return (
										<li key={i}>
											<figure className="pic">
												<img src={item.picUrl} alt='' />
											</figure>
											<div className="infor">
												<div className="top">
													<h3 className="name _TexTrow1">{item.name} </h3>
													<span className="artistName _TexTrow1"> -- {item.artist.name}</span>
												</div>
												<div className="description">
													<span className="type">{item.type}</span>
													<span className="company ">{item.company}</span>
												</div>
											</div>
											<span className="btnPlay ">
												<i className="_iconfont">&#xe609;</i>
											</span>
										</li>
									)
								})
							}

						</ul>
						<ul className={this.state.styleId==1?'disc active':'disc'}>
							{
								this.state.topSongList.map((item, i) => {
									if(i<3){
										return (
											<li key={i} className="song">
												<figure className="pic">
													<img src={item.album.picUrl} alt='' />
												</figure>
												 <div className="infor">
													<div className="top">
														<h3 className="name _TexTrow1">{item.name} </h3>
														<span className="artistName _TexTrow1"> -- {item.artists[0].name}</span>
													</div>
													<div className="description">
														<span className="type">{item.album.type}</span>
														<span className="company _TexTrow1">{item.album.name}</span>
													</div>
												</div> 
												<span className="btnPlay ">
													<i className="_iconfont">&#xe609;</i>
												</span>
											</li>
										)
									}
								})
							}
						</ul>
					</div>
				</section>
				<section className=" _mtop20">
					<div className="_titlePlate _contentM94">
						<span className='minTitpe'>排行榜</span>
						<h2 className='title'>热歌风向标</h2>
						<NavLink to='/me' className="borderNavlink">查看更多</NavLink>
					</div>
					<div className="topList _mtop20">
						<ul className='' style={{width:this.state._W_TopList}}>
							{
								this.state.TopListArray.map((item,i)=>{
									return(
										<li key={i} style={{width:(this.state._W_TopList/this.state.TopListArray.length)-15}}>
											<div className="tips">{item.name} <i className="_iconfont">&#xe608;</i></div>
											{
												item.list.map((data,x)=>{
													if(x<3){
														return(
															<div className="minMusic" key={x}>
																<figure className="pic">
																	<img src={data.al.picUrl} alt='' />
																</figure>
																<div className="infor">
																	<span className='number'>{x+1}</span>
																	<span className='name _TexTrow1'>{data.al.name}</span>
																	<span className='line'></span>
																	<span className="Author _TexTrow1">{data.ar[0].name}</span>
																</div>
																<div className="style">新</div>
															</div>
														)
													}
												})
											}
											<div className="bg" style={{backgroundImage:'linear-gradient(transparent, rgb(0, 0, 0)),url('+item.list[0].al.picUrl+')'}}></div>
										</li>
									)
								})
							}
						</ul>
					</div>
				</section>
				<section className="_contentM94 _mtop20">
					<div className="_titlePlate">
						<span className='minTitpe'>电台推荐</span>
						<h2 className='title'>一首小曲 一个故事</h2>
						<NavLink to='/me' className="borderNavlink">查看更多</NavLink>
					</div>
					<div className="djHot _mtop10">
						<ul>
							{
								this.state.DjHotList.map((item,i)=>{
									return(
									<li key={i}>
										<figure className="pic">
											<img src={item.picUrl} alt='' />
											<i className="btnPlay _iconfont">&#xe609;</i>
										</figure>
										<div className="infor">
											<h3 className="name _TexTrow1">{item.name}</h3>
											<span className="rcmdtext _TexTrow2">{item.rcmdtext}</span>
										</div>
									</li>
									)
								})
							}
						</ul>
					</div>
				</section>
			</section>
		)
	}
	
	date() {
		const that = this;
		let now = new Date();
		that.setState({
			date: now.getDate()
		})

	}
	async getBanner() {
		const that = this;
		const res = await _getBanner('?type=2')
		if (res.data.code === 200) {
			that.setState({
				bannerList: res.data.banners
			})
		}
	}
	async getPersonalized() {
		const that = this;
		const res = await _getPersonalized('?limit=6')
		if (res.data.code === 200) {
			that.setState({
				resultList: res.data.result
			})
			
		}
	}
	async getTopAlbum() {
		const that = this;
		const res = await _getTopAlbum('?limit=3')
		if (res.data.code === 200) {
			console.log(res.data.albums)
			that.setState({
				albumsList: res.data.albums
			})
		}
	}
	async getTopSong() {
		const that = this;
		const res = await _getTopSong('?type=0')
		if (res.data.code === 200) {
			that.setState({
				topSongList: res.data.data
			})
		}
	}
	async getDjHot(){
		const that = this;
		const res = await _getDjHot('?limit=7')
		if (res.data.code === 200) {
			that.setState({
				DjHotList: res.data.djRadios
			})
		}
	}
	async getTopList(){
		const that = this;
		const res1 = await _getTopList('?idx=1')
		if (res1.data.code === 200) {
			let res=that.state.TopListArray
			res.push({
				name:res1.data.playlist.name,
				list:res1.data.playlist.tracks
			})
			that.setState({
				TopListArray: res
			})
		}
		const res2 = await _getTopList('?idx=2')
		if (res2.data.code === 200) {
			let res=that.state.TopListArray
			res.push({
				name:res2.data.playlist.name,
				list:res2.data.playlist.tracks
			})
			that.setState({
				TopListArray: res
			})
		}
		const res3 = await _getTopList('?idx=3')
		if (res3.data.code === 200) {
			let res=that.state.TopListArray
			res.push({
					name:res3.data.playlist.name,
					list:res3.data.playlist.tracks
			})
			that.setState({
				TopListArray: res
			})
		}
		const res4 = await _getTopList('?idx=4')
		if (res4.data.code === 200) {
			let res=that.state.TopListArray
			res.push({
				name:res4.data.playlist.name,
				list:res4.data.playlist.tracks
			})
			that.setState({
				TopListArray: res
			})
		}
		that.setState({
			_W_TopList:(window.screen.availWidth*.94)*that.state.TopListArray.length
		})
	}
	componentDidMount() {
		console.log('在第一次渲染后调用,可以通过this.getDOMNode()来进行访问，可以开始ajax')
		const that = this;
		
		that.date()
		that.getBanner()
		that.getPersonalized()
		that.getTopAlbum()
		that.getTopSong()
		that.getDjHot()
		that.getTopList()
	}
	onClickTabSong(styleId) {
		const that = this;
		that.setState({
			styleId:styleId
		})
		console.log(styleId)
	}
	componentDidUpdate() {
		console.log('在组件完成更新后立即调用。在初始化时不会被调用')
	}
	componentWillUnmount() {
		console.log('在组件从 DOM 中移除的时候立刻被调用。')
	}
	
}
export default Home