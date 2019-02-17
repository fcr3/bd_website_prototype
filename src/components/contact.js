import React, {Component} from 'react';
import '../style/contact.css';

class Contact extends Component {
	render() {
		return (
			<div className="contactlayout">
				<div className="contactheader">
					Contact Us
				</div>
				<form className="contactform">
					<input className="field" type="text" placeholder="Name"/>
					<input className="field" type="email" placeholder="Email"/>
					<input className="field" type="datetime-local" />
					<textarea className="message" placeholder="Hello! What can we do for you?"/>
					<input className="submitbutton" type="submit" value="Submit"/>
				</form>
			</div>
		)
	}

}

export default Contact;
