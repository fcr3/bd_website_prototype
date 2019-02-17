import React, {Component} from 'react';
import '../style/menu4.css';
import {Link} from 'react-router-dom';

class Menu4 extends Component {

	render() {
		var classArr = ["menulayout"];

		return (
			<div className={classArr.join(" ")}>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
        <Link id="circleabt" to="/about">
          <path className="cls-1" d="M225.5,181.5l212,190-.15-.28a215.73,215.73,0,0,0-53.89,142.95C383.46,619.73,459,707.66,559,726.83l-.48-.33v287l.47-.5C301.75,992.13,99.52,776.77,99.52,514.17A498.61,498.61,0,0,1,225.73,181.88"/>
        </Link>
        <Link id="circlecnt" to="/contact">
          <path className="cls-1" d="M558.5,1013.5v-287l.48.33a217.45,217.45,0,0,0,41,3.88c119.59,0,216.54-97,216.54-216.54a215.83,215.83,0,0,0-18.1-86.81l0,.14,263-108-.33-.15a498.86,498.86,0,0,1,39.33,194.82c0,276.41-224.08,500.49-500.49,500.49q-20.73,0-41-1.66"/>
        </Link>
        <path id="pshard" className="cls-2" d="M603.91,945.21a2.24,2.24,0,0,1-4.14,0l-21.11-42.94a3.15,3.15,0,0,1,0-2.76l21.46-42.4a2.25,2.25,0,0,1,4.15,0l13,26.41,127.89,3.62L614.94,624.41c-5.57-11.22-19.56-11.26-25.18-.08L455.57,891.6a19.07,19.07,0,0,0,0,16.77l133.59,269.51c5.56,11.22,19.56,11.27,25.18.08L744.22,919.19l-125.34-3.54"/>
        <Link id="circleprj" to="/projects">
          <path className="cls-1" d="M437.35,371.22a216.59,216.59,0,0,1,361.1,56.14l0,.14,263-108-.33-.15C985.19,139.72,807.32,13.68,600,13.68c-148.89,0-282.6,65-374.28,168.2Z"/>
        </Link>
        <path id="ashard" className="cls-3" d="M209.63,278.62a2.25,2.25,0,0,1,2.1-3.58l47.74,3.19a3.18,3.18,0,0,1,2.38,1.39l26,39.8a2.24,2.24,0,0,1-2.1,3.57l-29.36-2L189.3,430l292.64,18.58c12.5.79,19.54-11.3,12.66-21.76L330.23,177a19.08,19.08,0,0,0-14.5-8.42L15.53,149.47C3,148.68-4,160.77,2.87,171.23L162,413.13l65.74-106.77"/>
        <path id="cshard" className="cls-3" d="M988.18,275.53a2.25,2.25,0,0,1,2.05,3.61L963.6,318.88a3.12,3.12,0,0,1-2.4,1.37l-47.45,2.61a2.24,2.24,0,0,1-2-3.6l16.38-24.45L867.27,182.24,704.85,426.39c-6.93,10.42,0,22.57,12.52,21.84l298.56-17.42a19.1,19.1,0,0,0,14.54-8.35L1197.08,172c6.93-10.43,0-22.57-12.52-21.84L895.5,167l59.6,110.32"/>

        <text id="middleabt" className="cls-5" transform="translate(509.77 522.43)">
          About Us
        </text>
        <text id="middleprj" className="cls-5" transform="translate(519.77 522.43)">
          Projects
        </text>
        <text id="middlecnt" className="cls-5" transform="translate(519.77 522.43)">
          Contact
        </text>

        <text id="aboutus" className="cls-4" transform="translate(206.31 693.88)">
          A<tspan x="27.83" y="0">b</tspan>
          <tspan x="53.85" y="0">o</tspan>
          <tspan x="78.94" y="0">u</tspan>
          <tspan x="104.13" y="0">t</tspan>
          <tspan x="119.25" y="0"> </tspan>
          <tspan x="128.94" y="0">U</tspan>
          <tspan x="158.22" y="0">s</tspan>
        </text>

        <text id="projects" className="cls-4" transform="translate(529.74 181.88)">
          P<tspan x="23.59" y="0">r</tspan>
          <tspan x="38.08" y="0">o</tspan>
          <tspan x="63.17" y="0">j</tspan>
          <tspan x="74.28" y="0">e</tspan>
          <tspan x="97.16" y="0">c</tspan>
          <tspan x="118.22" y="0">t</tspan>
          <tspan x="133.37" y="0">s</tspan>
        </text>

        <text id="contact" className="cls-4" transform="translate(841.67 693.88)">
          C<tspan x="26" y="0">o</tspan>
          <tspan x="51.08" y="0">n</tspan>
          <tspan x="76.29" y="0">t</tspan>
          <tspan x="91.4" y="0">a</tspan>
          <tspan x="113.43" y="0">c</tspan>
          <tspan x="134.5" y="0">t</tspan>
        </text>
      </svg>
			</div>
		)
	}

}

export default Menu4;
