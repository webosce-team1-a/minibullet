import Divider from '@enact/moonstone/Divider';
import Input from '@enact/moonstone/Input';
import Picker from '@enact/moonstone/Picker';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button/Button';
import axios from 'axios';


var friendlist = {};
var curFriend;
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
           friendlist: props.cList
        }
        
        setInterval(() => {
            this.props.getChat();
            this.setState({
                friendlist: this.props.cList
            });
        }, 3000);
    }

    handleChange = ({value}) => {
        curFriend = this.state.friendlist[Object.keys(this.state.friendlist)[value]];
        console.log("Selected " + curFriend);
    }

    render(){
        return(
            <Layout orientation="vertical">
                <Cell shrink components="label">
                    <div>
                    <Picker
                        onChange={this.handleChange}
                        orientation="horizontal"
                        width="medium"
                    >
                        {Object.keys(this.state.friendlist)}
                    </Picker>
                    <br/>
                    {/* send message */}
                    <Input placeholder="Enter your title" dismissOnEnter id="msgTitle"/>
                    <Input placeholder="Enter your message" dismissOnEnter id="msgBody"/>
                    <Button onClick={() => this.props.pushFriends(curFriend)}>SEND</Button>
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
