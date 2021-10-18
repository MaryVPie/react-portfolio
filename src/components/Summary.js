import React, { Component } from 'react';

class Summary extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <div className="col-12 col-md-4 g-0 ">
    <div className="card pt-3 border-0">
        <img className="card-img-top rounded-circle m-auto" src="./assets/200.jpg" alt="Mariia Pirogova"
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
            {/* <div className="row pt-1">
                <div className="col text-center"> 
                    <a href="https://github.com/MaryVPie" target="_blank">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
                <div className="col text-center"> 
                    <a href="https://www.linkedin.com/in/mariia-pirogova-42006a220/" target="_blank">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                </div>
                <div className="col text-center">
                    <a href="mailto:pirogova.mariia@gmail.com">
                        <i className="fas fa-envelope fa-lg"></i> 
                    </a>  
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-6 text-center">
                    <a href="tel:206-539-6437"> <i className="fas fa-phone fa-lg"></i> <br/> 2065396437 </a>
                </div>
                <div className="col-6 text-center">
                    <a href="Mariia Pirogova.pdf" target="_blank"> <i className="far fa-file-alt fa-lg"></i> <br/>
                        Resume</a>
                </div>
            </div> */}
        </div>
    </div>
</div>
  }
}

export default Summary;