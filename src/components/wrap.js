import React, {Component} from 'react';
// import Menu from './menu';
// import Menu2 from './menu2';
import menu_pic from '../assets/menu_v3.2.svg';
//import Menu3 from './menu3';
import Menu4 from './menu4';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import '../style/wrap.css';

class Wrap extends Component {
	componentDidMount() {
		const el = document.querySelector("#lay");
		var height = 25 / window.innerHeight;
		var width = 25 / window.innerWidth;
		el.addEventListener("mousemove", (e) => {
			var pageX = e.pageX - (window.innerWidth / 5);
      var pageY = e.pageY - (window.innerHeight / 5);
  		el.style.backgroundPositionX = width * pageX * -1 - 25 + "px";
  		el.style.backgroundPositionY = height * pageY * -1 - 50 + "px";
		});
	}

	render() {
		var leftmenu = ["leftmenu"];
		var leftmenupic = ["menupic"];
		var leftlayout = ["leftlayout"];
		var rightlayout = ["rightlayout"];
		if (window.location.pathname + "" !== "/") {
			leftlayout.push("moreleft");
			rightlayout.push("fartherright");
			leftmenu.push("showleftmenu");
			leftmenupic.push("showleftmenupic");
		}

		return (
			<div className="layout" id="lay">
				<Link to="/">
				<div className={leftmenu.join(" ")}>
					<img className={leftmenupic.join(" ")} src={menu_pic} alt="Menu"/>
				</div>
				</Link>
				<div className={leftlayout.join(" ")}>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/about" component={About}/>
						<Route exact path="/projects" component={Projects}/>
						<Route exact path="/contact" component={Contact}/>
					</Switch>
				</div>
				<div className={rightlayout.join(" ")}>
					<Menu4 />
				</div>
			</div>
		)
	}

}

export default Wrap;
