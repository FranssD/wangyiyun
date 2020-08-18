

import React from 'react';
import {} from '../../../../server'
import Nav from '@/components/Nav/Nav'
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
            <section className="video">
                2
               <Nav />
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
