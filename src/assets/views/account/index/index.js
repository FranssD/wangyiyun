

import React from 'react';
import {} from '../../../../server'
import Nav from '@/components/Nav/Nav'
import Header from '@/components/Header/Header'
import './index.css';
// img
import ad from '@/images/ad.jpg';
export default class Home extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
            currentSong:{},
            __Header:{
                bg:'rgba(255, 255, 255, 0)',
                color:'#fff',
                microphone:false,
                QRcode:true,
                search:false
			}
		}
	}
    render() {
        return (
            <section className="account _vh100">
                <Header default={this.state.__Header}/>
                <Nav />
                <img src={ad} alt=""/>
                <div className="contentFunctionalGroup">
                    <div className="scroll">
                        <div className="top _contentM94">
                            <div className="tips">手机电脑多端同步，尽享海量高品质音乐</div>
                            <div className="btnLogIn">立即登录</div>
                            <ol>
                                <li>
                                    <i className="_iconfont">&#xe616;</i>
                                    <span>我的消息</span>
                                </li>
                                <li>
                                    <i className="_iconfont">&#xe6ca;</i>
                                    <span>我的好友</span>
                                </li>
                                <li>
                                    <i className="_iconfont">&#xe62b;</i>
                                    <span>个人主页</span>
                                </li>
                                <li>
                                    <i className="_iconfont">&#xe653;</i>
                                    <span>个性装扮</span>
                                </li>
                            </ol>
                        </div>
                        <i className='_line2'></i>
                        <div className="botomLi">
                            <div className="plateTitle">音乐服务</div>
                            <ul>
                                <li>
                                    <i className="_iconfont icon">&#xe615;</i>
                                    <div className="r">
                                        <span className="name">出演</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe60e;</i>
                                    <div className="r">
                                        <span className="name">商城</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe60b;</i>
                                    <div className="r">
                                        <span className="name">口袋彩铃</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe657;</i>
                                    <div className="r">
                                        <span className="name">在线听歌免流量</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <i className='_line2'></i>
                            <div className="plateTitle">小工具</div>
                            <ul>
                                <li>
                                    <i className="_iconfont icon">&#xe60c;</i>
                                    <div className="r">
                                        <span className="name">设置</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe764;</i>
                                    <div className="r">
                                        <span className="name">夜间模式</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe613;</i>
                                    <div className="r">
                                        <span className="name">定时关闭</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe6ec;</i>
                                    <div className="r">
                                        <span className="name">音乐黑名单</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe614;</i>
                                    <div className="r">
                                        <span className="name">鲸云音效</span>
                                        <div className="rStyle">
                                            <span className="style">未开启</span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe612;</i>
                                    <div className="r">
                                        <span className="name">添加Siri捷径</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe611;</i>
                                    <div className="r">
                                        <span className="name">音乐闹钟</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe60d;</i>
                                    <div className="r">
                                        <span className="name">青少年模式</span>
                                        <div className="rStyle">
                                            <span className="style">未开启</span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <i className='_line2'></i>
                            <ul>
                                <li>
                                    <i className="_iconfont icon">&#xe630;</i>
                                    <div className="r">
                                        <span className="name">我的订单</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe60f;</i>
                                    <div className="r">
                                        <span className="name">音乐红包</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe686;</i>
                                    <div className="r">
                                        <span className="name">优惠券</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe61f;</i>
                                    <div className="r">
                                        <span className="name">分享网易云音乐</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="_iconfont icon">&#xe634;</i>
                                    <div className="r">
                                        <span className="name">关于</span>
                                        <div className="rStyle">
                                            <span className="style"></span>
                                            <i className="icon_arrow _iconfont">&#xe608;</i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    async getMusic(){
        const that = this;
       
    }
    onCanPlay = () => {
        if (this.playing) {
            this.audio && this.audio.pause()
        } else {
            this.audio && this.audio.play()
        }
    }
    onError = () => {
        this.props.appStore.onError()
    }
    onEnded = () => {
        this.props.appStore.onEnded()
    }
    onTimeUpdate = (e) => {
        this.props.appStore.onTimeUpdate(e)
    }
    componentDidMount() {
		console.log('在第一次渲染后调用,可以通过this.getDOMNode()来进行访问，可以开始ajax')
		const that = this;
        // this.props.appStore.setStore({
        //     audio: this.audio
        // })
		that.getMusic()
	}
}
