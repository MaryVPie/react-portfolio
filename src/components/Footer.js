import React, { Component } from 'react';

class Footer extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <div className="row pt-2">
    <div className="col text-center"> 
        <a href="https://github.com/MaryVPie" target="_blank">
            <i className="fab fa-github fa-2x"></i> <br/> GitNub
        </a>
    </div>
    <div className="col text-center"> 
        <a href="https://www.linkedin.com/in/mariia-pirogova-42006a220/" target="_blank">
            <i className="fab fa-linkedin fa-2x"></i> <br/> LinkedIn
        </a>
    </div>
    <div className="col text-center"> 
        <a href="https://www.facebook.com/profile.php?id=100004283254961" target="_blank">
            <i className="fab fa-facebook fa-2x"></i> <br/> Facebook
        </a>
    </div>
    <div className="col text-center">
        <a href="mailto:pirogova.mariia@gmail.com">
            <i className="fas fa-envelope fa-2x"></i> <br/> Email
        </a>    
    </div>
    <div className="col text-center">
        <a href="tel:206-539-6437"> <i className="fas fa-phone fa-2x"></i> <br/>
            206.539.6437 </a>
    </div>
    <div className="col text-center">
        <a href="Mariia Pirogova.pdf" target="_blank"> <i className="far fa-file-alt fa-2x"></i>
            <br/> Resume</a>
    </div>
</div>
  }
}

export default Footer;