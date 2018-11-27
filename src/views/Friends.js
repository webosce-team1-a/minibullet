import Divider from '@enact/moonstone/Divider';
import Input from '@enact/moonstone/Input';
import Picker from '@enact/moonstone/Picker';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button/Button';
import axios from 'axios';


const friendlist = ["INA", "INO", "YEDDO"];
const chatlist = [
    {
        title:"hihi",
        body: "hohoho"
    },
      {
        title: "hoho",
        body: "who'll win?"
      },
      {
        title: "I have something to tell you",
        body: "get out!"
      },
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

    constructor() {
		super()
		this.state = {
		   messages: chatlist
		}
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
                        {friendlist}
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
