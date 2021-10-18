import React, { Component } from 'react';
class RowHeading5 extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <div class="row bg-light" >
        <div class="col" id={this.props.domId}>
            <h5>{this.props.text}</h5>
        </div>
    </div>;
  }
}

export default RowHeading5;