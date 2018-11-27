import Divider from '@enact/moonstone/Divider';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import Input from '@enact/moonstone/Input';
import Layout, {Cell} from '@enact/ui/Layout';
import Button from '@enact/moonstone'
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

import mecss from './Me.less';
const inputColumn = {
	display: 'inline-block',
	width: '50%',
	verticalAlign: 'top'
};
var chatlist = ["what are you doing?", "i'm so hard"];
const MeView = (props) => (

		
	<Layout orientation="vertical">

		<Divider>my android</Divider>
	
		<Cell component={Scroller} focusableScrollbar>
		
			<Button onClick={props.getDevices}>My Devices</Button>
			<p id="devList"></p>

			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>		
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>			
			hihihihi<br/>
			hihihihi<br/>
			hihihihi<br/>
		</Cell>

		<Cell components="label" size="20%">
			<Input placeholder="Enter your message" dismissOnEnter width="60%"/>
		</Cell>
	</Layout>

);

export default MeView;
