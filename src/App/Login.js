import Divider from '@enact/moonstone/Divider';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import Input from '@enact/moonstone/Input';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button';

{/*

const inputColumn = {
	display: 'inline-block',
	width: '50%'
};


*/}
const Login = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<div >
				<Divider>please login using using your token</Divider>
				<Input placeholder="Enter token" iconAfter="lock" />
				<Button>Login</Button>
				<br/><br/><br/><br/>
				<Divider>If you don't have token..</Divider>
				<Button>Go to get Token</Button>
			</div>

			{/*
			<div style={inputColumn}>
				<Divider>Expandable Input</Divider>
				<ExpandableInput title="No noneText" />
				<ExpandableInput title="Disabled Input" noneText="I am disabled." disabled />
				<ExpandableInput title="Input with noneText" noneText="Nothing inputted" />
				<ExpandableInput title="Input with defaultValue" defaultValue="Initial value" />
				<ExpandableInput title="Input with Placeholder" noneText="No input" placeholder="Placeholder" />
				<ExpandableInput title="Input with Password" type="password" />
			</div>
			*/}
		</Cell>
	</Layout>
);


export default Login;