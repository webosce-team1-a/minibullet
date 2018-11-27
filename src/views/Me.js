import Divider from '@enact/moonstone/Divider';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import Input from '@enact/moonstone/Input';
import Layout, {Cell} from '@enact/ui/Layout';
import Picker from '@enact/moonstone/Picker';
import React from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import VirtualList from '@enact/moonstone/VirtualList';
import Scroller from '@enact/moonstone/Scroller';
import axios from 'axios';
import { Button } from '@enact/ui/Button/Button';

	/*items.push('Item ' + ('00' + i).slice(-3));*/

var devices=["hello","hohdioasd"];
const chatlist = [
	{
	  senderId: "perborgen",
	  text: "who'll win?"
	},
	{
	  senderId: "janedoe",
	  text: "who'll lost?"
	},
	{
	senderId: "janedoe",
	text: "who'll lost?"
	},
	{
	senderId: "janedoe",
	text: "who'll lost?"
	},
	{
	senderId: "janedoe",
	text: "who'll lost?"
	},
	{
		senderId: "janedoe",
		text: "who'll lost?"
	},
	{
		senderId: "janedoe",
		text: "who'll lost?"
	},
	{
		senderId: "janedoe",
		text: "who'll lost?"
	},
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
				 {message.senderId}
			   </div>
			   <div>
				 {message.text}
			   </div>
			 </li>
		   )
		 })}
	   </ul>
	  )
	}
}


class MeView extends React.Component{
	constructor(props) {
		super(props)
		props.getDevices;
		this.state = {
		   messages: chatlist
		}
	  }
	
	render(){
		return (
			<Layout orientation="vertical">
			<Cell shrink components="label">
				<div>
				{/* send message */}
				<input type ="text" id ="body" placeholder="Enter your message"></input>

				{/*<Input type ="text" id="body" placeholder="Enter your message" dismissOnEnter/>*/}
				
				<Button onClick={this.props.pushMe}>PUSH</Button>

				<Picker
					orientation="horizontal"
					width="medium"
				>
					{devices}
				</Picker>
				</div>
			</Cell>

			{/* render message*/}
			<Cell component={Scroller} focusableScrollbar>
				<MessageList messages={this.state.messages} />
			</Cell>
		</Layout>
		);
	}
}


export default MeView;