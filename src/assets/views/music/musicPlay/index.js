

import React from 'react';
import { _getCheckMusic,_getSongUrl} from '../../../../server'
import './index.css';
export default class Home extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
            currentSong:{}
		}
	}
    render() {
        return (
            <section className="musicPlay">
                <div className="topInof _contentM94">
                    <i className="_iconfont btnReturn" onClick={this.returnLink}>&#xe926;</i>
                    <div className="nameBox">
                        <h3 className='name'>与我无关</h3>
                        <span className="Author">阿沉 <i className="_iconfont icon">&#xe608;</i></span>
                    </div>
                    <i className="_iconfont share">&#xe65b;</i>
                </div>
                <div className="normalPlayerMiddle">
                    <div className="film">
                        <div className="rotateBox">
                            <img className="rotate" src="https://p1.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="normalPlayerBottom _contentM94">
                    <div className="specialPlayerControl _contentM94">
                        <i className="_iconfont">&#xe669;</i>
                        <i className="_iconfont">&#xe65a;</i>
                        <i className="_iconfont">&#xe60b;</i>
                        <i className="_iconfont">&#xe66a;</i>
                        <i className="_iconfont">&#xe66a;</i>
                        <i className="_iconfont">&#xe63c;</i>
                    </div>
                    <div className="normalPlayerProgress">
                        <span className="normalPlayerTime">0:01</span>
                        <span className="normalPlayerBar">
                            <span className="indexBarInner">
                                <span className="indexProgress">
                                    <div className="indexProgressBtn" >
                                        <div className="indexProgressBtnDot"></div>
                                    </div>
                                </span>
                            </span>
                        </span>
                        <span className="normalPlayerTime">4:00</span>
                    </div>
                    <div className="normalPlayerControl _contentM94">
                        <i className="_iconfont">&#xe666;</i>
                        <i className="_iconfont">&#xe663;</i>
                        <i className="_iconfont btnPlay">&#xe665;</i>
                        <i className="_iconfont">&#xe927;</i>
                        <i className="_iconfont">&#xe667;</i>
                    </div>
                </div>
                <div className="bg">
                    <img src="https://p1.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg" alt=""/>
                </div>
                <audio
                    onCanPlay={this.onCanPlay}
                    // onError={this.onError}
                    // onEnded={this.onEnded}
                    // onTimeUpdate={this.onTimeUpdate}
                     src={this.state.currentSong.url}
                    // ref={audio => this.audio = audio}
                    />
                {/* <div className="asd">
                {this.state.currentSong.data}
                </div> */}
            </section>
        )
    }
    returnLink=()=>{
        window.history.back(-1)
    }
    async getMusic(){
        const that = this;
        console.log('?')
        const res = await _getCheckMusic('?id=33894312')
		if (res.data.success) {
            const data = await _getSongUrl('?id=33894312')
            if(data.data.code==200){
                that.setState({
                    currentSong:data.data.data[0]
                })
                console.log(that.state.currentSong)
            }
		}
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
