import React from 'react';
import Header from "./Header.js";
import {
	Button, Form, FormGroup, Input, Card, CardImg, CardBlock,
	CardTitle, Col, Row, Container
} from 'reactstrap';


const ContactCard = (props) => {
	return (
		<Col xs="3">
			<Card block>
				<CardBlock>
					<CardTitle>{props.firstName} {props.lastName}</CardTitle>
				</CardBlock>
				<CardImg top width='100%' src='vwsquare.jpg' alt="Corgis" />
				<CardBlock>
					<div><strong>Company:</strong> {props.company}</div>
					<div><strong>Email:</strong> {props.email}</div>
					<div><strong>Phone:</strong> {props.cellNumber}</div>
					<div><strong>Web:</strong> {props.website}</div>
				</CardBlock>
				<div>
					<Button color="secondary">Edit</Button>
					<Button color="danger" onClick={(event) => this.setState({ isDeleted: true })} >Delete</Button>
					
				</div>
			</Card>
			<div>
				<br />
			</div>
		</Col>
	);
};

const deleteCard = (event) => {
	event.preventDefault();
	this.props.onClick();
};

const ContactList = (props) => {
	return (
		<div>
			{props.contacts.filter(card => !card.isDeleted).map(card => <ContactCard {...card} />)}
		</div>
	);
}

class InputForm extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		company: '',
		email: '',
		website: '',
		cellNumber: '',
		isDeleted: false,
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
			firstName: '',
			lastName: '',
			company: '',
			email: '',
			website: '',
			cellNumber: '',
			isDeleted: false
		});
	};
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Input type="text"
						value={this.state.firstName}
						onChange={(event) => this.setState({ firstName: event.target.value })}
						placeholder="First Name" required />
				</FormGroup>
				<FormGroup>
					<Input type="text"
						value={this.state.lastName}
						onChange={(event) => this.setState({ lastName: event.target.value })}
						placeholder="Last Name" required />
				</FormGroup>
				<FormGroup>
					<Input type="text"
						value={this.state.company}
						onChange={(event) => this.setState({ company: event.target.value })}
						placeholder="Company" />
				</FormGroup>
				<FormGroup>
					<Input type="text"
						value={this.state.email}
						onChange={(event) => this.setState({ email: event.target.value })}
						placeholder="Email" />
				</FormGroup>
				<FormGroup>
					<Input type="text"
						value={this.state.cellNumber}
						onChange={(event) => this.setState({ cellNumber: event.target.value })}
						placeholder="Phone Number" />
				</FormGroup>
				<FormGroup>
					<Input type="text"
						value={this.state.website}
						onChange={(event) => this.setState({ website: event.target.value })}
						placeholder="Website" />
				</FormGroup>
				<Button type="submit" color="primary">Add Contact</Button>
				<div>
					<br />
				</div>
			</Form>
		);
	}
}

class App extends React.Component {
	state = {
		contacts: [{
			firstName: 'William',
			lastName: 'Reed',
			company: 'zulily, LLC',
			email: 'william_reed@live.com',
			website: 'supernes.deviantart.com',
			cellNumber: '867-5309',
			isDeleted: false
		},
		{
			firstName: 'Imaginary',
			lastName: 'Person',
			company: 'Best Company',
			email: 'address@email.com',
			website: '',
			cellNumber: '123-4567',
			isDeleted: true
		}]
	};

	addNewContact = (contactInfo) => {
		this.setState(prevState => ({
			contacts: prevState.contacts.concat(contactInfo)
		}));
	};

	render() {
		return (
			<Container>
				<Header />
				<InputForm onSubmit={this.addNewContact} />
				<ContactList contacts={this.state.contacts} />
			</Container>
		);
	}
}

export default App;
