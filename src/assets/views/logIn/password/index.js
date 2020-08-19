

import React from 'react';
import { _regPhone } from '../../../../util';
import './index.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            LogIn: false
        }
    }
    render() {
        return (
            <section className="passwordPage _vh100">
               <div className="content _w90">
                    <div className="phoneBox">
                        <div className="areaCode">
                            <input type="password" placeholder="输入密码" onBlur={this.handleBlur.bind(this)} maxLength="11" />
                        </div>
                        <button type="button" onClick={this.btnLogIn.bind(this)} className={`_btn btnLogIn ${this.state.LogIn ? 'active' : ''}`}>立即登录</button>
                        <button type="button" onClick={this.btnForgetPassword.bind(this)} className={`_btn btnForgetPassword`}>忘记密码 <i className="_iconfont">&#xe608;</i></button>
                    </div>
                </div>
            </section>
        )
    }
    isNumber = (e) => {
        //console.log(e.target.value)
    }
    handleBlur = (e) => {
        const that = this;
        let value = e.target.value
        if (value.length>1) {
            that.setState({
                LogIn: true
            })
        } else {
            that.setState({
                LogIn: false
            })
        }
    }
    btnLogIn = (e) => {

    }
    btnForgetPassword=(e)=>{
        
    }
}
