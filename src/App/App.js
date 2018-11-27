import Changeable from '@enact/ui/Changeable';
import Group from '@enact/ui/Group';
import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import Layout, {Cell} from '@enact/ui/Layout';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import ScrollerComponent from '@enact/moonstone/Scroller';
import ViewManager from '@enact/ui/ViewManager';

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

const testFunction = () => {
	console.log("Test ");
}

let flag = false;
const tokenURL ="https://api.pushbullet.com/v2/users/me";
const baseURL = "https://api.pushbullet.com/v2/";
const userURL = baseURL + "chats";
const deviceURL = baseURL + "devices";
const pushURL = baseURL + "pushes";


const tokenEnter  = function() {
    var tok = "o.jkutNveC2uQZtTfPNfG0GchnrM1xdVpx";
	axios.post(tokenURL, { "Access-Token": tok }).then(res =>{
		console.log(res.email);
	})
}


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
				<Cell component={ScrollerComponent} size="20%">
					<Group childComponent={Item} itemProps={{className: css.navItem}} onSelect={handleChange} select={'radio'} selected={index}>
						{views.map((view) => view.title)}
					</Group>
				</Cell>
				<Cell component={ViewManager} index={index}>
					{views.map((view, i) => {
						view['testFunction'] = testFunction;
						view['tokenEnter'] =tokenEnter;

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
