'use client';

import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [userMessage, setUserMessage] = useState("How Can I Help?");
    const nameInputRef = useRef<any>();
    const emailInputRef = useRef<any>();
    const messageInputRef = useRef<any>();
    function sendEmail(e:any) {
        e.preventDefault();

        if (e.target.name == "") {
            setUserMessage("Better add a value in the name field!");
            return false;
        }
        if (e.target.email == "") {
            setUserMessage("Better add a value in the email field!");
            return false;
        }

        if (e.target.message == "") {
            setUserMessage("Better add a value in the message field!");
            return false;
        }

        let enteredName = nameInputRef.current.value;
        let enteredEmail = emailInputRef.current.value;
        let enteredMessage = messageInputRef.current.value;

        const reqBody = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
        };


        emailjs.sendForm('service_ai3shen', 'template_xf5cfim', e.target, 'user_NzVHH8XcaOSaLyWhK0FwL')
            .then((result:any) => {
                console.log('What are you looking in here for? Mind your own beeswax!');
                setUserMessage("Thank you, your message has been sent!");
                nameInputRef.current.value = "";
                emailInputRef.current.value = "";
                messageInputRef.current.value = "";

            }, (error:any) => {
                console.log(error.text);
            });
    }


    return (
        <div className="min-h-screen">
            <div className="showcase-form card">
                {userMessage && <h2 className="p-2">{userMessage}</h2>}
                <form onSubmit={sendEmail}>
                    <input type="hidden" name="form-name" value="contact"/>
                    <div className="form-control">
                        <input type="text"
                               name="name"
                               placeholder="* Name"
                               required
                               className="pl-2"
                               ref={nameInputRef}/>
                    </div>
                    <div className="form-control">
                        <input type="email"
                               name="email"
                               placeholder="* Email"
                               required
                               className="pl-2"
                               ref={emailInputRef}/>
                    </div>
                    <div className="form-control">
                        <textarea name="message"
                                  required
                                  placeholder="* Enter your message here."
                                  className="p-2"
                                  ref={messageInputRef}>

                        </textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary mt-4"/>
                </form>
            </div>
        </div>
    );
}

