import React, {Component} from 'react';
import Menu from './menu';
import '../style/home.css';

class About extends Component {
	render() {
		return (
			<div class="homelayout">
				<div class="homeleftlayout">
					design.blockchain about page
				</div>
				<div class="homerightlayout">
					<Menu />
				</div>
			</div>
		)
	}

}

export default About;
