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
let loginflag = true;
let firstflag = true;

let tok = "o.I7mba7PcOUawRGIHHYCW5QheducyLqDY";

const getChatList = () => {
	const url = "https://api.pushbullet.com/v2/" + "chats";
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
	{/*
			<Layout {...rest}>
				{flag ? (<Cell component={ScrollerComponent} size="20%">
					<Group childComponent={Item} itemProps={{className: css.navItem}} onSelect={handleChange} select={'radio'} selected={index}>
						{views.map((view) => view.title)}
					</Group>
				</Cell> ) : null}

				<Cell component={ViewManager} index={index}>
					{views.map((view, i) => {
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



					{firstflag ? 
					(<Cell component={ViewManager} index={0}>
					{views.map((view, i) => {
						firstflag = false;
						return(<View {...view} key={i} />);
					})} </Cell>)
					
					: 
					
					(<Cell component={ViewManager} index={index}>
					{views.map((view, i) => {
						firstflag = false;
						return(<View {...view} key={i} />);
					})} </Cell>)

					*/}