import React, { Component } from 'react'
import './Header.css';
import {
    NavLink
} from 'react-router-dom'

class Header extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
　　　 　　let header = this.props.default;
　　　　　 console.log(header);
　　　 }
    render() {
       
        return (
            <header className="header _contentP94" style={{background:this.props.default.bg,color:this.props.default.color}}>
                {this.props.default.microphone ? (
                <i className="_iconfont _iconVoice icon">&#xe67e;</i>
                ):(
                    ''
                )}
                {this.props.default.QRcode ? (
                    <i className="_iconfont _iconVoice icon">&#xe67b;</i>
                ):(
                    ''
                )}
                 {this.props.default.search ? (
                <div className="search">
                    <i className="_iconfont _iconSearch">&#xe668;</i>
                    <input placeholder="搜索内容"/>
                </div>
                ):(
                    ''
                )}
                <NavLink to="/musicPlay">
                <i className="_iconfont _iconAudio icon">&#xe61b;</i>
                </NavLink>
            </header>
        )
    }
}
export default Header


