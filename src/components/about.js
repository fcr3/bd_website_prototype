import React, {Component} from 'react';
import '../style/about.css';

class About extends Component {

	render() {
		var execArr = [1,2,3];
		var desArr = [1,2,3,4,5];
		var execArr = execArr.map((val, index) => {
			return (<div className="card">Name, Media, Title</div>)
		});
		var desArr = desArr.map((val, index) => {
			return (<div className="card">Name, Media, Title</div>)
		});


		return (
			<div className="aboutlayout">
					<div className="aboutHeader">
						blockchain needs designers
					</div>
					<div className="aboutBody">
						Let's face it. No matter how secure, optimal,
						or innovative an idea may be, if such an idea,
						is not understood or presented in such a way
						that others find relevant, then it's not going
						to be used, or not used to its full potential.
					</div>
					<div className="aboutBody">
						The same thing goes for blockchain. And that's
						why we exist.
					</div>
					<div className="teamsection">
						<div className="aboutSubHead">executives</div>
						<div className="teamcards">{execArr}</div>
						<div className="aboutSubHead">designers</div>
						<div className="teamcards">{desArr}</div>
					</div>
			</div>
		)
	}

}

export default About;
