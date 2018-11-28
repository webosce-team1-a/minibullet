import DayPicker from '@enact/moonstone/DayPicker';
import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button/Button';
import axios from 'axios';


const FriendsView = (props) => (
    
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<DayPicker
				noneText="none"
				title="Friends"
			/>
			<input type ="text" id ="token"></input>
			<Button onClick={props.getChatCont()}>Load Chats</Button>
			<p id="history"></p>
		</Cell>
	</Layout>
);


export default FriendsView;
