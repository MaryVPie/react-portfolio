import React, { Component } from 'react';
import Skill from './Skill';

const skillSet = [
    {
        id:1,
        name: "HTML",
        labelPercent: "15%",
        skillPercent: "75%"
    },
    {
        id:2,
        name: "CSS",
        labelPercent: "15%",
        skillPercent: "75%"
    },
    {
        id:3,
        name: "Javascript",
        labelPercent: "15%",
        skillPercent: "85%"
    },
    {
        id:4,
        name: "Node.js",
        labelPercent: "15%",
        skillPercent: "80%"
    },
    {
        id:5,
        name: "Bootstrap",
        labelPercent: "15%",
        skillPercent: "75%"
    }
];


class Skills extends Component {
  render() {
    return <div className="col-12 col-sm-6 col-md-8 py-3 py-md-0 g-0">
    <div className="card pt-3 border-0">
        <h5 className="card-title p-2" id="Skills">Skills</h5>
        {skillSet.map( ( skillInfo ) => (
					<Skill 
                    key={skillInfo.id}
                    name={skillInfo.name}
                    labelPercent={skillInfo.labelPercent}
                    skillPercent={skillInfo.skillPercent} />
				) )}
    </div>
    <div className="card pt-3 border-0">
        <h5 className="card-title p-2">About me</h5>
        <div className="row">
            <div className="col m-2 ">
                Hello everyone! My name is Mariia! I am currently attending a Full-Stack Web Development Bootcamp through the University of Washington. There I am learning how to develop apps on the web. It is really interesting process and I am trying to increase my knowledge and skills in IT.  I hold a Master of Organization Management from Russian university.  In addition, I have taken various programming courses at Microsoft Learn and udemy.
            </div>
        </div>
    </div>
</div>
  }
}

export default Skills;