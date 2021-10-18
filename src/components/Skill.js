import React, { Component } from 'react';
import './Skill.css'; // Tell webpack that Button.js uses these styles
class Skill extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <div class="row">
    <div class="col m-2 ">
        <div className="progress">
            <div className="progress-bar bg-secondary bg-opacity-50" role="progressbar" style={{
              width: this.props.labelPercent
            }} aria-valuenow={this.props.labelPercent}
                aria-valuemin="0" aria-valuemax="100">{this.props.name}</div>

            <div className="progress-bar bg-info bg-opacity-25" role="progressbar" style={{
              width: this.props.skillPercent
            }} aria-valuenow="75"
                aria-valuemin="0" aria-valuemax="100"></div>
            <div style={{
              "align-items": "flex-end"
            }}>{this.props.skillPercent}</div>
        </div>
    </div>
</div>;
  }
}

export default Skill;