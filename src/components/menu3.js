import React, {Component} from 'react';
import '../style/menu3.css';
import {Link} from 'react-router-dom';

class Menu3 extends Component {

	render() {
		var classArr = ["menulayout"];

		return (
			<div className={classArr.join(" ")}>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
          <circle class="cls-1" cx="600.01" cy="446.29" r="216.54"/>
					<Link id="pshard" to="/projects">
          	<path class="cls-2" d="M603.91,877.33a2.24,2.24,0,0,1-4.14,0l-21.11-42.93a3.15,3.15,0,0,1,0-2.76l21.46-42.41a2.25,2.25,0,0,1,4.15,0l13,26.41,127.89,3.62L614.94,556.54c-5.57-11.23-19.56-11.27-25.18-.09L455.57,823.72a19.07,19.07,0,0,0,0,16.77L589.12,1110c5.56,11.22,19.56,11.27,25.18.08L744.22,851.31l-125.34-3.54"/>
					</Link>
					<Link id="ashard" to="/about">
						<path class="cls-3" d="M209.63,210.74a2.25,2.25,0,0,1,2.1-3.58l47.74,3.19a3.16,3.16,0,0,1,2.38,1.4l26,39.79a2.24,2.24,0,0,1-2.1,3.57l-29.36-2-67.08,109,292.64,18.58c12.5.79,19.54-11.3,12.66-21.76L330.23,109.07a19.08,19.08,0,0,0-14.5-8.42L15.53,81.59C3,80.8-4,92.9,2.87,103.35L162,345.25l65.74-106.77"/>
					</Link>
					<Link id="cshard" to="/contact">
						<path class="cls-3" d="M988.18,207.65a2.25,2.25,0,0,1,2.05,3.61L963.6,251a3.14,3.14,0,0,1-2.4,1.36L913.75,255a2.24,2.24,0,0,1-2-3.6l16.38-24.45L867.27,114.36,704.85,358.51c-6.93,10.43,0,22.57,12.52,21.84l298.56-17.42a19.1,19.1,0,0,0,14.54-8.35l166.61-250.45c6.93-10.43,0-22.57-12.52-21.84L895.5,99.16l59.6,110.32"/>
					</Link>
					<text id="menu" class="cls-4" transform="translate(529.77 466.43)">
            Menu
          </text>
					<text id="projects" class="cls-4" transform="translate(495.77 466.43)">
            Projects
          </text>
					<text id="aboutus" class="cls-4" transform="translate(480.77 466.43)">
            About Us
          </text>
					<text id="contact" class="cls-4" transform="translate(460.77 466.43)">
            Contact Us
          </text>
        </svg>
			</div>
		)
	}

}

export default Menu3;
