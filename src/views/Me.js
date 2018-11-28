import Divider from '@enact/moonstone/Divider';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import Input from '@enact/moonstone/Input';
import Layout, {Cell} from '@enact/ui/Layout';
import Picker from '@enact/moonstone/Picker';
import React from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import VirtualList from '@enact/moonstone/VirtualList';
import Scroller from '@enact/moonstone/Scroller';
import { Button } from '@enact/moonstone/Button/Button';

   /*items.push('Item ' + ('00' + i).slice(-3));*/

var seleted;
var pushlist;
var devicelist;

const chatlist = [
   /*
   {
     senderId: "perborgen",
     text: "who'll win?"
   },
   */
  ]

   {/*
class SendMessageForm extends React.Component {
   constructor() {
     super()
     this.state = {
      message: ''
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange(e) {
     this.setState({
      message: e.target.value
     })
   }
   handleSubmit(e) {
     e.preventDefault()
     this.props.sendMessage(this.state.message)
     this.setState({
      message: ''
     })
   }
   render() {
     return (
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form">
        <input
         onChange={this.handleChange}
         value={this.state.message}
         placeholder="Type your message and hit ENTER"
         type="text" />
      </form>
     )
   }
}
*/}

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


class MeView extends React.Component {
   constructor(props) {
      super(props);
      (props.getDevices());
      console.log(devicelist);
   this.state = {
          messages: chatlist,
          friendlist: props.cList
      }
      
      setInterval(() => {
            this.props.getDevices();
            this.setState({
                  devicelist: this.props.dList
            });
      }, 3000);
   }

   handleChange({value}){
      seleted = this.state.devicelist[Object.keys(this.state.devicelist)[value]];
      console.log("CHANGED " +seleted);
   }

   render(){
      return(
            <Layout orientation="vertical">
                  <Cell shrink components="label">
                        <div>
                        <Picker
                              onChange={this.state.handleChange}
                              orientation="horizontal"
                              width="medium"
                        >
                        {Object.keys(this.state.friendlist)}
                        </Picker>
                        <br/>
                        {/* send message */}
                        <Input placeholder="Enter your title" dismissOnEnter id="msgTitle"/>
                        <Input placeholder="Enter your message" dismissOnEnter id="msgBody"/>
                        <Button onClick={() => this.props.pushMe()}>SEND</Button>
                        </div>
                  </Cell>

                  <Cell component={Scroller} focusableScrollbar>
                        <MessageList messages={this.state.messages} />
                  </Cell>
            </Layout>
      );
   }
}


export default MeView;