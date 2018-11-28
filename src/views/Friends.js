import Divider from '@enact/moonstone/Divider';
import Input from '@enact/moonstone/Input';
import Picker from '@enact/moonstone/Picker';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button/Button';
import axios from 'axios';


var friendlist = [];
const chatlist = [
    {
        id: 0,
        title:"hihi",
        body: "hohoho"
    },
    {
        id: 1,
        title: "hoho",
        body: "who'll win?"
    },
    {
        id: 2,
        title: "I have something to tell you",
        body: "get out!"
    }
];
class MessageList extends React.Component {
	render() {
	  return (
		<ul className="message-list">                 
		  {this.props.messages.map(message => {
			return (
			 <li key={message.id}>
			   <div>
				 {message.title}
			   </div>
			   <div>
				 {message.body}
			   </div>
			 </li>
		   )
		 })}
	   </ul>
	  )
	}
}

class FriendsView extends React.Component {

    constructor(props) {
        super(props);
        (props.getChat());
        console.log(friendlist);
		this.state = {
           messages: chatlist,
           friendlist: props.cList.slice()
        }
        
        setInterval(() => {
            this.props.getChat();
            this.setState({
                friendlist: this.props.cList.slice()
            });
        }, 3000);
    }

    render(){
        return(
            <Layout orientation="vertical">
                <Cell shrink components="label">
                    <div>
                    {/* send message */}
                    <Input placeholder="Enter your message" dismissOnEnter/>
                    <Picker
                        orientation="horizontal"
                        width="medium"
                    >
                        {this.state.friendlist}
                    </Picker>
                    </div>
                </Cell>

                <Cell component={Scroller} focusableScrollbar>
                    <MessageList messages={this.state.messages} />
                </Cell>
            </Layout>
        );
    }
}

export default FriendsView;
