import Changeable from '@enact/ui/Changeable';
import Group from '@enact/ui/Group';
import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import Layout, {Cell} from '@enact/ui/Layout';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollerComponent from '@enact/moonstone/Scroller';
import ViewManager from '@enact/ui/ViewManager';
import axios from 'axios';
import LS2Request from '@enact/webos/LS2Request';

//import MainPanel from '../views/MainPanel';
import Me from '../views/Me.js'
import Friends from '../views/Friends.js'
import Setting from '../views/Setting.js'
import Home from './Home.js';
import Login from './Login.js';

import css from './App.less';
import View from './View.js';

const views = [
	{title: 'home', view: Home},
	{title: 'me', view: Me},
	{title:'friends', view: Friends},
	{title:'setting', view:Setting},
	{title: 'login', view:Login},
]

let tok;
let me;
var chatList=[];
const getChatList = () => {
	const url = "https://api.pushbullet.com/v2/" + "chats";
	let extra = { headers : { 'Access-Token': tok} };
 
	axios.get(url, extra)
	   .then(response => {
		  var cList = response.data.chats;
		  for(var i = 0; i < cList.length; i++)
				 chatList[i] = cList[i].with.name;
	   })
	   .catch(error => {
		  console.error(error);
	   });
}
var devList = [];
const getDevices = () =>{
	const url =  "https://api.pushbullet.com/v2/" + "devices";
	let extra = { headers : { 'Access-Token': tok} };
	var out = document.getElementById("devList");
 
	axios.get(url, extra)
	   .then(response => {
		  var dList = response.data.devices;
		  for(var i = 0; i < dList.length; i++){
			 if(dList[i].nickname !=null)
				devList[i] = dList[i].nickname;
		  }
	   })
	   .catch(error => {
		  console.error(error);
	   });
}
var pushList=[];
const pushMe =() =>{
	const url =  "https://api.pushbullet.com/v2/" + "pushes";
	axios.defaults.headers.common['Access-Token'] = tok;
	let extra = { 'type' : 'note','title' : 'HELLO',	'body' : 'HELLO WORLD' };

	axios.post(url,extra ).then(response => {
		console.log("PUSH");
	})
	  .catch(error =>{
		console.error(error);
	  });
}
const pushFriends =() =>{
	const url =  "https://api.pushbullet.com/v2/" + "pushes";
	axios.defaults.headers.common['Access-Token'] = tok;
	let extra = { 'type' : 'link','email':'goodboyih96@gmail.com','title' : 'HELLO','body' : 'HELLO WORLD' };

	axios.post(url,extra ).then(response => {
		console.log("PUSH");
	})
	  .catch(error =>{
		console.error(error);
	  });
}

const getAllPushes =() =>{
	const url =  "https://api.pushbullet.com/v2/" + "pushes";
	axios.defaults.headers.common['Access-Token'] = tok;
	let extra = { 'active' : 'true'};
 
	//반드시반드시 바꿔요
	axios.get(url, extra )
		.then(response => {
			console.log("PUSH");
			var pList = response.data.pushes;
			for(var i = 0; i < pList.length; i++){
			   pushList[i] = pList[i].body;
			}   
		})
		.catch(error => {
			console.error(error);
		});
}

const notifyLS2 = (msg) => {
	new LS2Request().send({
		service: 'luna://com.webos.notification/',
		method: 'createToast',
		parameters: {
			"sourceId": "com.domain.app",
			"message": msg,
			"noaction": true,
			"persistent": false
		},
		subscribe: true,
		onSuccess: function (args) {
			console.log(args);
		},
		onFailure: function (args) {
			console.log(args);
		}
	});
}
class AppBase extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			index: 0,
			flag: false
		};
	}

	handleChange = ({selected}) => {
		this.setState({
			index: selected
		});
	}

	checkTokenValidity = () => {
		const url = "https://api.pushbullet.com/v2/" + "users/me";
		var USER_TOKEN = document.getElementById("TOK").getElementsByTagName("input")[0].value;
		let extra = { headers : { 'Access-Token': USER_TOKEN} };
	
		axios.get(url, extra)
			.then(response => {
				console.log(response.data.name);
				notifyLS2("Welcome " + response.data.name);
				tok = USER_TOKEN;
				this.setState({
					flag: true
				});
			})
			.catch(error => {
				console.log("FAIL" + " " + error);
				notifyLS2("LOGIN FAILED");
			});
	}

	render () {
		console.log(this.state.flag);

		return (
			<Layout {...this.props}>
				{this.state.flag ? (<Cell component={ScrollerComponent} size="20%">
					<Group childComponent={Item} itemProps={{className: css.navItem}} onSelect={this.handleChange} selected={this.state.index}>
						{views.map((view) => view.title)}
					</Group>
				</Cell> ) : null}

				<Cell component={ViewManager} index={this.state.flag ? this.state.index : 4}>
					{views.map((view, i) => {
						view['loginValid'] = this.checkTokenValidity;
						view['pushMe'] = pushMe;
						view['pushFriends'] = pushFriends;
						view['getAllPushes'] = getAllPushes;
						view['getDevices'] = getDevices;
						view['notify'] = notifyLS2;
						view['getChat'] = getChatList;
						view['token'] = tok;
						view['me'] = me;
						
						view['cList'] = chatList;
						view['dList'] = devList;
						view['pLsit'] = pushList;
						return (
							<View {...view} key={i} />
						);
					})}
				</Cell>
			</Layout>
		);
	}
}

const App = MoonstoneDecorator(AppBase);


export default MoonstoneDecorator(App);