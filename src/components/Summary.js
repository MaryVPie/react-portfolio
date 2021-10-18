import React, { Component } from 'react';

class Summary extends Component {
  
  render() {

    return <div className="col-12 col-md-4 gx-0 gx-sm-3">
    <div className="card h-100 pt-3 border-0">
        <img className="card-img-top rounded-circle m-auto" src={`${process.env.PUBLIC_URL}/assets/200.jpg`} alt="Mariia Pirogova"
            style= {{
                height: "180px",
                width: "180px"
            }}/>
        <div className="card-body p-3 ">
            <div className="row">
                <div className="col">
                    <h5 className="card-subtitle mb-2 text-center">Full Stack Web Developer</h5>
                </div>
            </div>
            <p className="card-text pt-1 text-center">
                I'm passionate about the Iot Devices which can help prevent the hunt on the endangered species.
                I thrive to apply my recently learned skills to that area. 
            </p>

        </div>
    </div>
</div>
  }
}

export default Summary;