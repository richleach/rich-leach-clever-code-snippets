'use client';

import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [userMessage, setUserMessage] = useState('Drop me a line.');
    const [name, setName] = useState('* Name');
    const [email, setEmail] = useState('* Email');
    const [message, setMessage] = useState('* Enter your message here');
    function sendEmail(e:any) {
        e.preventDefault();

        if(e.target.name.value ==''){
            setUserMessage('Better add a value in the name field')
            return false;
        }
        if(e.target.email.value == ''){
            setUserMessage('Better add a value in the email field')
            return false;
        }
        if(e.target.message.value == ''){
            setUserMessage('Better add a value in the message field')
            return false;
        }

        emailjs.sendForm('service_ai3shen', 'template_xf5cfim', e.target, 'user_NzVHH8XcaOSaLyWhK0FwL')
            .then((result:any) => {
                console.log('What are you looking in here for? Mind your own beeswax!');
                setUserMessage('Thank you, message sent.');
            }, (error:any) => {
                console.log(error.text);
            });
    }


    return (
        <div className="min-h-screen">
            <div className="showcase-form card">
                <h2 style={{marginBottom:"10px"}}>{userMessage}</h2>
                <form onSubmit={sendEmail}>
                    <input type="hidden" name="form-name" value="contact"/>
                    <div className="form-control">
                        <input type="text" className="p-2" name="name" value={name} required/>
                    </div>
                    <div className="form-control">
                        <input type="email" className="p-2" name="email" value={email} required/>
                    </div>
                    <div className="form-control">
                        <textarea name="message"  value={message} rows={4} className="p-2" required>

                        </textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary mt-4"/>
                </form>
            </div>
        </div>
    );
}

