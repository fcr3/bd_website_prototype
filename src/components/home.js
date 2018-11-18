import React, {Component} from 'react';
import '../style/home.css';

class Home extends Component {
	render() {
		return (
			<div className="homelayout">
					<div className="hometext">
						design <br/>
						<span className="ylw">.blockchain</span>
					</div>
					<div className="hometext-bottom">
						a <span className="ylw">blockchain@berkeley </span>
						department
					</div>
			</div>
		)
	}

}

export default Home;
