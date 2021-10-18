import React, { useState } from 'react';

function ContactForm() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
	const emailRegex = /^[A-Za-z0-9.]+@[A-Za-z_]+\.[A-Za-z]{2,3}$/;


    const handleInputChange = (e) => {
        setErrorMessages([]);
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
        }

        let newErrorMessage = revalidateFields();
        console.log(newErrorMessage);
        setErrorMessages(newErrorMessage);
        if (errorMessages != null && errorMessages.length > 0 ) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        
        if (errorMessages != null && errorMessages.length > 0) {
            alert("Please fix errors");
            return;
        }
        // Alert the user their first and last name, clear the inputs

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessages([]);
        alert('We\'ve successfully sent your request');
    };
    
    return (
        <>
            <form >
                <div className="row" >
                    <div className="offset-sm-3 col-12 col-sm-6">

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleInputChange} onBlur={handleInputChange}
                                className="form-control"
                                id="name_input"
                                placeholder="Your awesome name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                onChange={handleInputChange} onBlur={handleInputChange}
                                className="form-control" 
                                id="email_input" 
                                placeholder="myemail@gmail.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea 
                                className="form-control"
                                name="message"
                                onChange={handleInputChange} onBlur={handleInputChange}
                                id="message" 
                                rows="3">
                                </textarea>
                        </div>
                        <div className="d-grid gap-2">
                            {errorMessages != null && errorMessages.length > 0 && 
                                errorMessages.map( ( errorMessage ) => (
                                    <div key={errorMessage} className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                ) )
                            }   
                            <button
                                disabled={buttonDisabled}
                                className="btn btn-primary" 
                                type="button" onClick={handleFormSubmit}>Submit</button>
                        </div>


                    </div>
                </div>
            </form>
        </>


    );

    function revalidateFields() {
        let newErrorMessages = [];
        if (name == '') {
            newErrorMessages.push('Please fill in your name');
        }

        if (email == '') {
            newErrorMessages.push('Please fill in your email');
        } else if (!email.match(emailRegex)) {
            newErrorMessages.push('Please fill in valid email');
        }

        

        if (message == '') {
            newErrorMessages.push('Please fill in your message');
        }
        return newErrorMessages;
    }
}

export default ContactForm;
