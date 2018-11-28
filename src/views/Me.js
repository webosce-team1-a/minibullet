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
var pushlist = []
var devicelist=[]

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


class MeView extends React.Component {
	constructor(props) {
		super(props);
		(props.getDevices());
		(props.getAllPushes());

		this.state = {
				messages: props,
				devicelist: props.dList.slice(),
				pushlist : props.pList.slice(),	
		}

		setInterval(() => {
			this.props.getDevices();
			this.setState({
					devicelist: this.props.dList.slice(),
					pushlist : this.props.pList.slice(),
					seletedDev : seleted,	
			});
		}, 3000);
	}

	handleChange({value}){
		console.log(this.devicelist.values(devicelist.key(value)));		
	}

	render(){
		return (
			<Layout orientation="vertical">
			<Cell shrink components="label">
				<div>
				{/* send message */}
				<Input placeholder="Enter your message" dismissOnEnter/>
				<Button onClick ={this.props.pushMe}>Send</Button>
				
				<Picker
					onChange ={this.handleChange}
					orientation="horizontal"
					width="medium"
				>
					{this.state.devicelist}
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