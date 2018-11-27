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

//import MainPanel from '../views/MainPanel';
import Me from '../views/Me.js'
import Friends from '../views/Friends.js'
import Setting from '../views/Setting.js'
import Home from './Home.js';
import Login from './Login.js';

import css from './App.less';
import View from './View.js';

const views = [
	{title: 'login', view:Login},
	{title: 'home', view: Home},
	{title: 'me', view: Me},
	{title:'friends', view: Friends},
	{title:'setting', view:Setting},
]

let tok = "o.jkutNveC2uQZtTfPNfG0GchnrM1xdVpx";

const getChatList = () => {
	const url = "https://api.pushbullet.com/v2/" + "chats";
	console.log(tok);
	let extra = { headers : { 'Access-Token': tok} };
	var out = document.getElementById("chatList");

	axios.get(url, extra)
		.then(response => {
			var chatList = response.data.chats;
			for(var i = 0; i < chatList.length; i++)
                out.innerHTML += chatList[i].with.name + "<br>";
		})
		.catch(error => {
			console.error(error);
		});
}

const getDevices = () =>{
	const url =  "https://api.pushbullet.com/v2/" + "devices";
	let extra = { headers : { 'Access-Token': tok} };
	var out = document.getElementById("devList");

	axios.get(url, extra)
		.then(response => {
			var devList = response.data.devices;
			for(var i = 0; i < devList.length; i++){
				if(devList[i].nickname !=null)
					out.innerHTML += devList[i].nickname + "<br>";
			}
		})
		.catch(error => {
			console.error(error);
		});
}

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

const getPushes =() =>{
	const url =  "https://api.pushbullet.com/v2/" + "pushes";
	axios.defaults.headers.common['Access-Token'] = tok;
	let extra = { 'type' : 'note','title' : 'HELLO',	'body' : 'HELLO WORLD' };

}

let flag = true;

const AppBase = kind({
	name: 'App',

	propTypes: {
		index: PropTypes.number,
		onChange: PropTypes.func
	},

	styles: {
		css,
		className: 'app'
	},

	computed: {
		handleChange: ({onChange}) => ({selected}) => {
			onChange({index: selected});
		}
	},

	render: ({handleChange, index, ...rest}) => {
		delete rest.onChange;

		return (
			<Layout {...rest}>
				{flag ? (<Cell component={ScrollerComponent} size="20%">
					<Group childComponent={Item} itemProps={{className: css.navItem}} onSelect={handleChange} select={'radio'} selected={index}>
						{views.map((view) => view.title)}
					</Group>
				</Cell> ) : null}
				<Cell component={ViewManager} index={index}>
					{views.map((view, i) => {
						view['pushMe'] = pushMe;
						view['pushFriends'] = pushFriends;
						view['getDevices'] = getDevices;
						view['getChat'] = getChatList;
						view['token'] = tok;
						return (
							<View {...view} key={i} />
						);
					})}
				</Cell>
			</Layout>
		);
	}
});

const App = MoonstoneDecorator(Changeable({prop: 'index', change: 'onChange'}, AppBase));


export default MoonstoneDecorator(App);
