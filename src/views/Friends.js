import DayPicker from '@enact/moonstone/DayPicker';
import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button/Button';
import axios from 'axios';

const tokenURL ="https://api.pushbullet.com/v2/users/me";
const baseURL = "https://api.pushbullet.com/v2/";
const userURL = baseURL + "chats";
const deviceURL = baseURL + "devices";
const pushURL = baseURL + "pushes";

const FriendsView = (props) => (
    
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<DayPicker
				noneText="none"
				title="Friends"
			/>	

			< Button onClick={() => function(){
				 var tok = "o.jkutNveC2uQZtTfPNfG0GchnrM1xdVpx";
				 axios.post(tokenURL, { "Access-Token": tok }).then(res =>{
					 console.log(res.email);
				 })
			}}>TEST</Button>

		</Cell>
	</Layout>
);

export default FriendsView;
