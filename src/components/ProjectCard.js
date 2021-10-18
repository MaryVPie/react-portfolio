import React, { Component } from 'react';

class ProjectCard extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <div className="col pt-1 g-0">
    <div className="card pt-3 h-100 border-0">
        <img className="card-img-top  m-auto" src={this.props.img} alt={this.props.alt}
            style={{
                height: "180px",
                width: "180px"
            }}/>
        <div className="card-body">
            <div className="row ">
                <div className="col bg-light">
                    <h5 className="card-title text-center">{this.props.name}</h5>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-6 text-center">
                    <a href={this.props.deployed} target="_blank"> 
                        <i className="fas fa-laptop-code"></i> Deployed App
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a href={this.props.repo} target="_blank"> 
                        <i className="fab fa-github fa-lg"></i> GitHub Repo
                    </a>
                </div>
            </div>                   
            <p className="card-text">
                {this.props.description}
            </p>
        </div>
    </div>
    </div>;
  }
}

export default ProjectCard;

