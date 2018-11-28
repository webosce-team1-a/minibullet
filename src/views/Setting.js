import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import Scroller from '@enact/moonstone/Scroller';
import Toggleable from '@enact/ui/Toggleable';
import beanbird from './beanbird.png';
const StatefulToggleButton = Toggleable({toggle: 'onClick', prop: 'selected'}, ToggleButton);


const SettingView = () => (
 
    <Layout orientation="vertical" align="center">
        <Cell shirink align="center">
            <StatefulToggleButton toggleOffLabel="logout" toggleOnLabel="login" />
        </Cell>
        <Cell shirink align="center">
        </Cell>
        <Cell shirink align="center">
            <img src={beanbird} width="300px" height="300px"></img>
        </Cell>

    </Layout>
  
);

export default SettingView;
