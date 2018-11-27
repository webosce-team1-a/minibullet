import DayPicker from '@enact/moonstone/DayPicker';
import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import { Button } from '@enact/moonstone/Button/Button';

const FriendsView = (props) => (
    
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<DayPicker
				noneText="none"
				title="Friends"
			/>
			<Button onClick={props.testFunction}>TEST</Button>		
		</Cell>
	</Layout>
);

export default FriendsView;
