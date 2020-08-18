import React from 'react';
import {BrowserRouter as Router, Route,Redirect, Switch} from 'react-router-dom';
import NavHome from '../src/assets/views/Home/index';

import MusicPlay from '../src/assets/views/music/musicPlay/index';
//视频
import NavVideIndex from './assets/views/video/index/index';
//我的
import NavMeIndex from './assets/views/me/index/index';
//朋友
import NavfriendIndex from '../src/assets/views/friend/index/index';
//账号
import NavaccountIndex from '../src/assets/views/account/index/index';
//-------------登录
import LogIn from '../src/assets/views/logIn/index/index';
import Phone from '../src/assets/views/logIn/phone/index';

//404
import Error from '../src/assets/views/Error/index';


const BasicRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={NavHome}/>
            <Route exact path="/videIndex" component={NavVideIndex}/>
            <Route exact path="/meIndex" component={NavMeIndex}/>
            <Route exact path="/friendIndex" component={NavfriendIndex}/>
            <Route exact path="/accountIndex" component={NavaccountIndex}/>
            

            <Route exact path="/musicPlay" component={MusicPlay}/>
            <Route exact path="/logIn" component={LogIn}/>
            <Route exact path="/phone" component={Phone}/>
            <Route path="/error" component={Error}/>
            <Route path="*" render={(props) => <Redirect to='/error'/>}/>
        </Switch>
    </Router>
);

export default BasicRoute;