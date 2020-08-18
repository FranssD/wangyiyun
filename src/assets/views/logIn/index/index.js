

import React from 'react';
import './index.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActiveLogIn: false
        }
    }
    render() {
        return (
            <section className="logIn _vh100">
                <div className="content">
                    <h1 className="logo">
                        <i className="_iconfont">&#xe603;</i>
                    </h1>
                    <div className="btnBox">
                        <button type="button" className="_btn btn logIn" onClick={this.linkPhone.bind(this)}>
                            一键登录
                        </button>
                        <button type="button" className="_btn btn experience">
                            立即体验
                        </button>
                    </div>
                    <div className="terms" onClick={this.termsClick.bind(this)}>
                        <i className={`round ${this.state.isActiveLogIn ? 'active' : ''}`}></i>同意
                        <span>《服务条款》</span>
                        <span>《隐私政策》</span>
                        <span>《儿童隐私政策》</span>
                        <span>《天翼账号服务协议》</span>
                    </div>
                </div>
            </section>
        )
    }
    termsClick = () => {
        const that = this;
        that.setState({
            isActiveLogIn: !that.state.isActiveLogIn
        })
    }
    linkPhone = () => {
        const that = this;
        if(that.state.isActiveLogIn){
            this.props.history.push({ pathname: '/phone', state:'' });
        }else{
            alert('需要确定协议')
        }
    }

}
