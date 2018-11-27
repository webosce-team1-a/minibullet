import DayPicker from '@enact/moonstone/DayPicker';
import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import mecss from './Me.less';

var chatlist = ["what are you doing?", "i'm so hard"];
const MeView = () => (
    



	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>exchange your text and file with your devices</Divider>
			<div className={mecss.me}>
				
			</div>
		</Cell>
	</Layout>



);

export default MeView;
