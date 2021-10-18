import React, { Component } from 'react';
import Skills from './Skills';

class SkillSection extends Component {
  render() {
    return <div className="col-12 col-sm-6 col-md-8 py-3 py-md-0 g-0">
    <Skills/>
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

export default SkillSection;