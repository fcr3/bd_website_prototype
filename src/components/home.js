import React, {Component} from 'react';
import Menu from './menu';
import '../style/home.css';

class Home extends Component {
	componentDidMount() {
		const el = document.querySelector("#homelay");
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
		return (
			<div class="homelayout" id="homelay">
				<div class="homeleftlayout">
					<div class="hometext">
						design <br/>
						<span class="ylw">.blockchain</span>
					</div>
					<div class="hometext-bottom">
						a <span class="ylw">blockchain@berkeley</span> department
					</div>
				</div>
				<div class="homerightlayout">
					<Menu />
				</div>
			</div>
		)
	}

}

export default Home;
