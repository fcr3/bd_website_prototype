import React, {Component} from 'react';
import '../style/menu.css';
import {Link} from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<div class="menulayout">
				<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-250 -250 1940.83 2068.5">
					<line class="cls-1" x1="1439.24" y1="1102.54" x2="1073.35" y2="687.99"/>
					<line class="cls-1" x1="756.78" y1="1200.91" x2="100.32" y2="1103.52"/>
					<line class="cls-1" x1="756.11" y1="833.96" x2="1433.4" y2="520.62"/>
					<line class="cls-1" x1="756.78" y1="834.7" x2="756.78" y2="1567.13"/>
					<line class="cls-1" x1="100.23" y1="505.05" x2="756.11" y2="833.96"/>
					<line class="cls-2" x1="755.14" y1="101.2" x2="429.15" y2="670.48"/>
					<Link to="/projects" class="link">
            <circle class="cls-3" cx="757.14" cy="1567.38" r="101.12" stroke="white"/>
						<text x="167.14" y="1607.38" font-size="15vmin" fill="white">projects</text>
          </Link>
          <Link to="/" class="link">
						<circle class="cls-3" cx="755.21" cy="833.51" r="101.03" stroke="white"/>
          </Link>
          <Link to="/about" class="link">
						<circle class="cls-3" cx="755.21" cy="101.03" r="101.03" stroke="white"/>
						<text x="547.14" y="-67.38" font-size="15vmin" fill="white">our story</text>
          </Link>
          <Link to="/projects" class="link">
					<circle class="cls-3" cx="1433.87" cy="521.19" r="101.12" stroke="white"/>
          </Link>
          <Link to="/" class="link">
					<circle class="cls-3" cx="101.03" cy="505.16" r="101.03" stroke="white"/>
					<text x="-80.03" y="295.16" font-size="15vmin" fill="white">contact</text>
          </Link>
          <Link to="/about" class="link">
					<circle class="cls-3" cx="101.12" cy="1103.48" r="101.12" stroke="white"/>
					<text x="-100.03" y="895.16" font-size="15vmin" fill="white">medium</text>
          </Link>
          <Link to="/projects" class="link">
					<circle class="cls-3" cx="1439.71" cy="1103.48" r="101.12" stroke="white"/>
          </Link>
				</svg>
			</div>
		)
	}

}

export default Menu;
