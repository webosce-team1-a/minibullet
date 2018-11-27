import DayPicker from '@enact/moonstone/DayPicker';
import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

const SettingView = () => (
    
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<DayPicker
				noneText="none"
				title="SETTING"
			/>
		</Cell>
	</Layout>
);

export default SettingView;
