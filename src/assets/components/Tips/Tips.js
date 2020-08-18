import React, { Component } from "react";
import "./Tips.css";
class Tips extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            Tips:{
                string:'',
                type:'',
            }, 
        };
    }
    render() {
        return (
            <div className={['_tips ',this.props.TipsData.type].join('')}>
                <p><span>{this.props.TipsData.string}</span></p>
            </div>
        );
    }
   
}
export default Tips;
