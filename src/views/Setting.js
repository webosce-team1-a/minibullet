import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import Scroller from '@enact/moonstone/Scroller';
import Toggleable from '@enact/ui/Toggleable';

const StatefulToggleButton = Toggleable({toggle: 'onClick', prop: 'selected'}, ToggleButton);


const SettingView = () => (
 
        <Layout orientation="vertical" align="center">
            <Cell component={Scroller} focusableScrollbar>
                <StatefulToggleButton toggleOffLabel="logout" toggleOnLabel="login" />
            </Cell>
        </Layout>
  
);

export default SettingView;
