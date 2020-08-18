import React, { Component } from 'react'
import './Nav.css';
import {
    NavLink
} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li><NavLink exact to="/" ><i className="_iconfont">&#xe602;</i><span>发现</span></NavLink></li>
                    <li><NavLink to="/videIndex"><i className="_iconfont">&#xe788;</i><span>视频</span></NavLink></li>
                    <li><NavLink to="/meIndex"><i className="_iconfont">&#xe600;</i><span>我的</span></NavLink></li>
                    <li><NavLink to="/friendIndex"><i className="_iconfont">&#xe601;</i><span>朋友</span></NavLink></li>
                    <li><NavLink to="/accountIndex"><i className="_iconfont">&#xe925;</i><span>账号</span></NavLink></li>
                </ul>
            </nav>
        )
    }
}
export default Nav

