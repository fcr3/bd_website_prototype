import React, {Component} from 'react';
import '../style/project.css';

class Projects extends Component {
	render() {

		var projArr = [1,2,3,4,5];
		projArr = projArr.map((val, index) => {
			return (
				<div key={val} className="projectcard">
					<div className="projectcardImage">
						Image
					</div>
					Title
				</div>
			)
		});

		return (
			<div className="projectlayout">
				<div className="projectheader">
					projects
				</div>
				<div className="projectcards">
					{projArr}
				</div>
			</div>
		)
	}

}

export default Projects;
