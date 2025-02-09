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
        <div className="flex items-center justify-center min-h-screen">
            <div className="showcase-form card">
                <h1 className="w-full text-center text-xl pt-2 pb-2">Build Smarter Applications That Perform Better –
                    Custom Next.js, React & Supabase Development</h1>
                With over 25 years of experience in web application development, I&apos;ve built solutions for industry
                leaders like IBM, Microsoft, and ZenPlanner in industries such as technology, construction, fitness, real estate... among
                others. As a full-stack developer specializing in React, TypeScript, CSS and Postgres, I bring
                a deep understanding of performance, scalability, and streamlined development processes.<br/><br/>

                Having served as an architect, developer, QA tester, and project manager, I know what works - and what
                doesn&apos;t. From monolithic structures to microservices, from your own data center to the cloud, I’ve
                successfully
                deployed applications that prioritize simplicity without sacrificing innovation. <br/><br/>

                If your users are on a browser, tablet or phone I&apos;ll build your applications to be found and discovered. Self hosting? No problem. Parking your application up in the cloud? I&apos;m AWS Certified and have relationships with distinguished cloud hosts like Vercel. I&apos;ll build your application to the exact specs, and you&apos;ll take away a scalable application tailored to your precise business needs.<br/><br/>

                <h1 className="w-full text-center text-xl pt-2 pb-2">Let’s Build Something Great Together</h1>
                If you’re looking for a seasoned professional who can transform pitfalls into features, I’d love to
                connect.

                {userMessage && <h2 className="w-full text-center text-xl pt-6 pb-2">{userMessage}</h2>}
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
                    <div className="flex">
                        <input type="submit" value="Send" className="btn btn-primary mt-4 items-center"
                               style={{margin: "auto"}}/>
                    </div>

                </form>
            </div>
        </div>
    );
}

