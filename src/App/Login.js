import Divider from '@enact/moonstone/Divider';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import Input from '@enact/moonstone/Input';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button';
import LS2Request from '@enact/webos/LS2Request';
import { propTypes } from '@enact/moonstone/Panels/Router';
import {InputBase} from '@enact/moonstone/Input';

const openBrowser = () => {
	new LS2Request().send({
		service: 'luna://com.webos.service.applicationmanager/',
		method: 'launch',
		parameters: {
			"id":"com.webos.app.enactbrowser",
			"keepAlive":true,
			"params":{
				"url":"http://www.google.com"
			}
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

{/*

const inputColumn = {
	display: 'inline-block',
	width: '50%'
};


*/}
const Login = (props) => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<div >
				<Divider>please login using using your token</Divider>
				<Input placeholder="Enter token" iconAfter="lock" id="TOK"/>
				<Button onClick={() => props.loginValid()}>Login</Button>
				<br/><br/><br/><br/>
				<Divider>If you don't have token..</Divider>
				<Button onClick={() => openBrowser()} >Go to get Token</Button>
			</div>

		</Cell>
	</Layout>
);


export default Login;