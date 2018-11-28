import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import Scroller from '@enact/moonstone/Scroller';
import Toggleable from '@enact/ui/Toggleable';
import beanbird from './beanbird.png';
import Button from '@enact/moonstone/Button';
import Notification from '@enact/moonstone/Notification';

const StatefulToggleButton = Toggleable({toggle: 'onClick', prop: 'selected'}, ToggleButton);


class SettingView extends React.Component{
    constructor (props) {
        super(props);
        
		this.state = {
			open: false
		};

		this.handleOpen = this.handleOpen();
		this.handleClose = this.handleClose();
	}
 

	handleOpen = () => {
		this.setState({
			['open']: true
		});
    }
    

	handleClose = () => {
		this.setState({
			['open']: false
		});
	}

    render(){

        const {open} = this.state;

        return(
            <Layout orientation="vertical">
                
                <Cell shirink aline="center">
                    <Divider>logout button</Divider>
                    <div>
                        <StatefulToggleButton toggleOffLabel="logout" toggleOnLabel="login" />
                    </div>
                    <br/>
                    <Divider>You can check your information</Divider>
                    <div>
                    <Button onClick={this.handleOpen}>My information</Button>
                    <Notification
                        open={open}
                        onClose={this.handleClose}
                    >
                        <span>{`Not to worry, this message isn't going to be very long.
                        It just has to be long enough to show what a long message looks like.
                        That's all; have a nice day.`}</span>
                        <buttons>
                            <Button onClick={this.handleClose}>OK!</Button>
                        </buttons>
                    </Notification>

                    </div>
                    
                    
                </Cell>
                <Cell shirink align="center">
                    <img src={beanbird} width="300px" height="300px"></img>
                </Cell>

            </Layout>
        )
    }
};

export default SettingView;
