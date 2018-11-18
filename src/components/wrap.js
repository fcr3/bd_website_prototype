import React, {Component} from 'react';
import Menu from './menu';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';
import '../style/wrap.css';

class Wrap extends Component {
	componentDidMount() {
		const el = document.querySelector("#lay");
		var height = 25 / window.innerHeight;
		var width = 25 / window.innerWidth;
		el.addEventListener("mousemove", (e) => {
			var pageX = e.pageX - (window.innerWidth / 2);
      var pageY = e.pageY - (window.innerHeight / 2);
  		el.style.backgroundPositionX = width * pageX * -1 - 25 + "px";
  		el.style.backgroundPositionY = height * pageY * -1 - 50 + "px";
		});
	}

	render() {
		var leftlayout = ["leftlayout"];
		var rightlayout = ["rightlayout"];
		if (window.location.pathname + "" !== "/") {
			leftlayout.push("moreleft");
			rightlayout.push("fartherright");
		}

		return (
			<div className="layout" id="lay">
				<div className={leftlayout.join(" ")}>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/about" component={About}/>
						<Route exact path="/projects" component={Projects}/>
					</Switch>
				</div>
				<div className={rightlayout.join(" ")}>
					<Menu />
				</div>
			</div>
		)
	}

}

export default Wrap;
