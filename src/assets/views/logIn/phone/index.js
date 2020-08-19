

import React from 'react';
import { _regPhone } from '../../../../util';
import './index.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NextStep: false
        }
    }
    render() {
        return (
            <section className="phonePage _vh100">
                <div className="content _w90">
                    <div className="tips">
                        未注册手机号登录后将自动创建账号
                    </div>
                    <div className="phoneBox">
                        <div className="areaCode">
                            <select>
                                <option value="volvo">+86</option>
                                <option value="saab">+85</option>
                                <option value="opel">+84</option>
                                <option value="audi">+83</option>
                            </select>
                            <input type="tel" placeholder="输入手机号" onBlur={this.handleBlur.bind(this)} maxLength="11" />
                        </div>
                        <button type="button" onClick={this.btnNext.bind(this)} className={`_btn btnNextStep ${this.state.NextStep ? 'active' : ''}`}>下一步</button>
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
        if (_regPhone(value)) {
            that.setState({
                NextStep: true
            })
        } else {
            that.setState({
                NextStep: false
            })
        }
    }
    btnNext = (e) => {
        const that = this;
        if (that.state.NextStep) {
            this.props.history.push({ pathname: '/password', state:'' });
        }
    }
}
