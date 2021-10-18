import React, { Component } from 'react';

class PageHeading extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <> 
        <div className="row">
            <div className="col-12" >
            <h2> {this.props.text}</h2>
            </div>
        </div>
    </>
  }
}

export default PageHeading;