import React from 'react';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='contact-form-container'>
                <form id='contact-form'>
                    <h1>
                        Contact Us
                    </h1>

                    <input
                    placeholder='Name'>
                    </input>
                    <input
                    placeholder='Email'>
                    </input>
                    <input
                    placeholder='Subject'>
                    </input>
                    <textarea 
                    placeholder='Type your message here...'>

                    </textarea>
                </form>
            </div>
        )
    }

}

export default ContactForm;