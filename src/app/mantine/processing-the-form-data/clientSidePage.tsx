'use client'

import React, {useState} from "react";
import Link from 'next/link';
import {
    Button, Fieldset, Group, Modal, NumberInput, PinInput, Rating, ScrollArea, SegmentedControl, Switch, TextInput
} from '@mantine/core';

import type {Metadata} from "next";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useDisclosure} from "@mantine/hooks";
import styles from "@/app/mantine/getting-started-with-forms/ResponsiveInput.module.css";
import Image from "next/image";
import {submitForm} from "@/app/actions/actions";

export default function ProcessingTheFormData() {
    const code2 = `//actions.ts
//this is the server action that handles server side error trapping, database calls, etc.
'use server'

type SubmitFormResponse = {
    success: boolean;
    errors: string[];
    message: string;
}

export async function submitForm(formData:FormData): Promise<SubmitFormResponse> {

    const errors:string[] = [];

    //loop over the form and spit out all key/value pairs for debugging
    const formDataObject = Object.fromEntries(formData.entries());
    console.log('Form Data as Object:', formDataObject);


    // Return a success response
    return { success: true, errors, message: 'Successfully processed form' };
}
    `

    const code = `//the form is a client component, you can import a server action to process the form
'use client'

import React, {useState} from "react";
import Link from 'next/link';
import {
    Button, Fieldset, Group, Modal, NumberInput, PinInput, Rating, ScrollArea, SegmentedControl, Switch, TextInput
} from '@mantine/core';

import {useDisclosure} from "@mantine/hooks";
import styles from "@/app/mantine/getting-started-with-forms/ResponsiveInput.module.css";
import {submitForm} from "@/app/actions/actions";

export default function ProcessingTheFormData() {
//form controls
    const [serverMessageValue, setServerMessageValue] = useState('');
    const [serverError, setServerError] = useState('');
    const [firstValue, setFirstValue] = useState('');
    const [firstError, setFirstError] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [lastError, setLastError] = useState('');
    const [pinValue, setPinValue] = useState('');
    const [pinError, setPinError] = useState('');
    const [switchChecked, setSwitchChecked]: [boolean, (value: (((prevState: boolean) => boolean) | boolean)) => void] = useState(true);
    const [switchError, setSwitchError] = useState('');
    const [ratingValue, setRatingValue] = useState(4);
    const [ageValue, setAgeValue] = useState<any>('');
    const [ageError, setAgeError] = useState('');
    const [favTechValue, setFavTechValue] = useState('Next.js');
    //modal controls
    const [opened, {open, close}] = useDisclosure(false);
    const [modalOpen, setModalOpen] = useState(false);
    
    //error trapping on submit: [CLIENT SIDE]
    const handleSubmit = async (formData: FormData) => {
        //check for blanks
        (!firstValue) ? setFirstError('Enter your first name') : setFirstError('');
        (!lastValue) ? setLastError('Enter your last name') : setLastError('');
        (pinValue.length < 4) ? setPinError('PIN must contain 4 numbers') : setPinError('');
        (!ageValue) ? setAgeError('Select your age from the list') : setAgeError('');
        (!switchChecked) ? setSwitchError('You must agree to this End User License Agreement before proceeding') : setSwitchError('');

        //if no errors, then call the server action to process the form on the server
        if (!firstValue || !lastValue || (pinValue.length < 4) || !switchChecked || !ageValue)
            return;
        else {
            // Call the server action [SERVER SIDE]
            const response = await submitForm(formData);

            if (!response.message) {
                setServerMessageValue('There was a problem talking with the server action'); // Set errors if present
            }

            if (response.success) {
                setServerMessageValue(response.message); // Set success message
                console.log(response.errors)
            }
        }
    };
    
    return (
        <div className="shadow-md bg-white" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "15px",
                borderRadius: "10px"
            }}>
                <div className="text-lg">Original Form Demo Using Mantine Form Components</div>
                <span>Fill out the form below and then click the Submit Form button. Your information is completely safe with me.</span>
                <form action={handleSubmit}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            {/*I display any error messages immediately beneath the troubled form control*/}
                            {serverMessageValue && <span className="text-sm text-red-500">{serverMessageValue}</span>}

                            <Fieldset legend="Confidential Information"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className={styles.wrapper}>
                                    <TextInput
                                        label="First Name"
                                        name="first"
                                        description="Enter your first name (required)"
                                        value={firstValue}
                                        onChange={(event) => setFirstValue(event.currentTarget.value)}
                                        required
                                        className="pt-4"

                                    />
                                    {firstError && <span className="text-sm text-red-500">ERROR! {firstError}</span>}
                                </div>
                                <div className={styles.wrapper}>
                                    <TextInput
                                        label="Last Name"
                                        name="last"
                                        description="Enter your last name (required)"
                                        value={lastValue}
                                        onChange={(event) => setLastValue(event.currentTarget.value)}
                                        required
                                        className="pt-4"
                                    />
                                    {lastError && <span className="text-sm text-red-500">ERROR! {lastError}</span>}
                                </div>
                            </Fieldset>

                            <Fieldset legend="Super-Duper Confidential Information"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5">
                                    <div style={{fontSize: "14px", fontWeight: "500"}}>ATM PIN <span
                                        style={{color: "red"}}>*</span>
                                    </div>
                                    <div style={{
                                        fontSize: "12px",
                                        color: "#868E96",
                                        paddingBottom: "6px",
                                        fontWeight: "700px"
                                    }}>Enter your PIN. What, you don&apos;t trust me? (definitely required)
                                    </div>
                                    <PinInput value={pinValue} onChange={setPinValue} type="number" name="pin"/>
                                </div>
                                {pinError && <span className="text-sm text-red-500">ERROR! {pinError}</span>}
                            </Fieldset>

                            <Fieldset legend="Required... But Nobody Really Cares"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5">
                                    <div style={{fontSize: "14px", fontWeight: "500"}}>Your favorite web technology?
                                    </div>
                                    <div style={{
                                        fontSize: "12px",
                                        color: "#868E96",
                                        paddingBottom: "4px",
                                        fontWeight: "700px"
                                    }}> Pick one
                                    </div>
                                    <SegmentedControl data={['React', 'Next.js', 'Angular', 'Vue', 'CSS']}
                                                      value={favTechValue} onChange={setFavTechValue}
                                                      className="responsive-control" name="favTech"/>
                                </div>

                                <div className="pt-5">

                                    <NumberInput
                                        label="Enter your age"
                                        description="Don't lie...."
                                        className="w-[100px]"
                                        value={ageValue}
                                        onChange={setAgeValue}
                                        min={18}
                                        max={99}
                                        placeholder="18-99"
                                        name="age"
                                    />

                                    {ageError && <span className="text-sm text-red-500">ERROR! {ageError}</span>}
                                </div>

                            </Fieldset>

                            <Fieldset legend="Finally, how would you rate this form?"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5" style={{fontSize: "14px", fontWeight: "500"}}>Be honest (but 5
                                    stars
                                    please)
                                </div>
                                <div style={{
                                    fontSize: "12px",
                                    color: "#868E96",
                                    paddingBottom: "6px",
                                    fontWeight: "700px"
                                }}> Pick one
                                </div>
                                <Rating defaultValue={ratingValue} color="orange" value={ratingValue}
                                        onChange={setRatingValue} name="rating"/>
                            </Fieldset>
                        </div>

                        <div className="w-full lg:w-1/2 pt-5">
                            <Fieldset legend="End User License Agreement"
                                      style={{fontWeight: "bold", width: "90%"}}>
                                <span className="text-sm font-normal">Scroll to read, then agree to this agreement by agreeing 
                                at the bottom of this agreement. But only if you agree!<br/><br/></span>
                                <ScrollArea h={730} style={{
                                    paddingRight: "30px",
                                    paddingLeft: "20px",
                                    paddingTop: "10px",
                                    border: "thin solid lightgray",
                                    borderRadius: "5px"
                                }}>
                                    <div className="text-lg font-normal">HumancentiPad Plot</div>
                                    <div className="text-sm font-normal">
                                        [...cited from Wikipedia]<br/>
                                        After Eric Cartman boasts to his classmates of owning an iPad and mocks them for
                                        not having one, he is humiliated when it is revealed that he actually does not
                                        own
                                        one....&lt;snip /&gt; <br/><br/>
                                    </div>
                                    <hr style={{color: "lightgrey"}}/>
                                    <br/>
                                    <Switch
                                        style={{fontSize: "14px"}}
                                        checked={switchChecked}
                                        onChange={(event) => setSwitchChecked(event.currentTarget.checked)}
                                        label="I agree that I've read this End User License Agreement and I'm OK with selling my soul to 
                                        Corporate America. I mean, did you NOT see this South Park episode???"
                                        name="eulaAgreement"
                                    />
                                    <br/>
                                </ScrollArea>
                                {switchError && <span className="text-sm text-red-500">ERROR! {switchError}</span>}
                            </Fieldset>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Group mt="md" className="pt-6">
                            <Button type="submit">Submit Form</Button>
                        </Group>
                    </div>
                </form>
            </div>
        )
    }`
    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    const CodeBlock2 = ({ code2 }: { code2: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code2}
        </SyntaxHighlighter>
    );
    //form controls
    const [serverMessageValue, setServerMessageValue] = useState('');
    const [serverError, setServerError] = useState('');
    const [firstValue, setFirstValue] = useState('');
    const [firstError, setFirstError] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [lastError, setLastError] = useState('');
    const [pinValue, setPinValue] = useState('');
    const [pinError, setPinError] = useState('');
    const [switchChecked, setSwitchChecked]: [boolean, (value: (((prevState: boolean) => boolean) | boolean)) => void] = useState(true);
    const [switchError, setSwitchError] = useState('');
    const [ratingValue, setRatingValue] = useState(4);
    const [ageValue, setAgeValue] = useState<any>('');
    const [ageError, setAgeError] = useState('');
    const [favTechValue, setFavTechValue] = useState('Next.js');
    //modal controls
    const [opened, {open, close}] = useDisclosure(false);
    const [modalOpen, setModalOpen] = useState(false);


    //error trapping on submit
    const handleSubmit = async (formData: FormData) => {
        //check for blanks
        (!firstValue) ? setFirstError('Enter your first name') : setFirstError('');
        (!lastValue) ? setLastError('Enter your last name') : setLastError('');
        (pinValue.length < 4) ? setPinError('PIN must contain 4 numbers') : setPinError('');
        (!ageValue) ? setAgeError('Select your age from the list') : setAgeError('');
        (!switchChecked) ? setSwitchError('You must agree to this End User License Agreement before proceeding') : setSwitchError('');

        //if no errors, then call the server action to process the form on the server
        if (!firstValue || !lastValue || (pinValue.length < 4) || !switchChecked || !ageValue)
            return;
        else {
            // Call the server action
            const response = await submitForm(formData);

            if (!response.message) {
                setServerMessageValue('There was a problem talking with the server action'); // Set errors if present
            }

            if (response.success) {
                setServerMessageValue(response.message); // Set success message
                console.log(response.errors)
            }
        }
    };

    return (

        <div className="min-h-screen m-4">
            <h2 className="w-full text-center text-xl">
                Processing Form Data Using Next.js 15 & Mantine Form Controls
            </h2>
            <p className="mt-3">Good job, you put together a slick looking form. Now - to process that form data, which means you&apos;ll need to get that form data onto the server. I have to say that Next.js 15 has moved the
                entire paradigm of handling form data a lot closer to the way we used to process forms
                back in the bad ol&apos; days. They even gave us the <strong>action</strong> attribute back in the form
                tag. It&apos;s starting to feel like Christmas (&quot;we goin&apos; to AppleBees after this&quot; - John
                Wick reference)....</p>

            <br/>
            <p>I grabbed this code from <Link href="/mantine/getting-started-with-forms">my Getting Started With
                Forms </Link>page. It&apos;s as close to a real world use case as I could think of, seeing as most forms
                are a mix of form input elements, selects, radio buttons, etc. The main difference here is the addition
                of a server action, which I like to build out in a separate file as most forms will likely belong to a
                specific use-case but have relevant functionality (think addUser, updateUser, deleteUser....) </p><br/>
            <p><strong>Big Picture:</strong> I usually build out my forms as client-side components since I lean on
                useState a lot and user interaction is way-mo-harder using server-side components. For this post I&apos;m just showing how the server action gets called and then I display the results of the submitted form in the server console (not the browser console!) In a future post I&apos;ll do some server-side validation and prep some SQL to handle the database comms. For now just understand the client side form, appreciate the server action and know that end-to-end form processing is right around the corner.... </p>

            <br/>

            <div className="shadow-md bg-white" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "15px",
                borderRadius: "10px"
            }}>
                <div className="text-lg">Original Form Demo Using Mantine Form Components</div>
                <span>Fill out the form below and then click the Submit Form button. Your information is completely safe with me.</span>
                <form action={handleSubmit}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            {/*I display any error messages immediately beneath the troubled form control*/}
                            {serverMessageValue && <span className="text-sm text-red-500">{serverMessageValue}</span>}

                            <Fieldset legend="Confidential Information"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className={styles.wrapper}>
                                    <TextInput
                                        label="First Name"
                                        name="first"
                                        description="Enter your first name (required)"
                                        value={firstValue}
                                        onChange={(event) => setFirstValue(event.currentTarget.value)}
                                        required
                                        className="pt-4"

                                    />
                                    {firstError && <span className="text-sm text-red-500">ERROR! {firstError}</span>}
                                </div>
                                <div className={styles.wrapper}>
                                    <TextInput
                                        label="Last Name"
                                        name="last"
                                        description="Enter your last name (required)"
                                        value={lastValue}
                                        onChange={(event) => setLastValue(event.currentTarget.value)}
                                        required
                                        className="pt-4"
                                    />
                                    {lastError && <span className="text-sm text-red-500">ERROR! {lastError}</span>}
                                </div>
                            </Fieldset>

                            <Fieldset legend="Super-Duper Confidential Information"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5">
                                    <div style={{fontSize: "14px", fontWeight: "500"}}>ATM PIN <span
                                        style={{color: "red"}}>*</span>
                                    </div>
                                    <div style={{
                                        fontSize: "12px",
                                        color: "#868E96",
                                        paddingBottom: "6px",
                                        fontWeight: "700px"
                                    }}>Enter your PIN. What, you don&apos;t trust me? (definitely required)
                                    </div>
                                    <PinInput value={pinValue} onChange={setPinValue} type="number" name="pin"/>
                                </div>
                                {pinError && <span className="text-sm text-red-500">ERROR! {pinError}</span>}
                            </Fieldset>

                            <Fieldset legend="Required... But Nobody Really Cares"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5">
                                    <div style={{fontSize: "14px", fontWeight: "500"}}>Your favorite web technology?
                                    </div>
                                    <div style={{
                                        fontSize: "12px",
                                        color: "#868E96",
                                        paddingBottom: "4px",
                                        fontWeight: "700px"
                                    }}> Pick one
                                    </div>
                                    <SegmentedControl data={['React', 'Next.js', 'Angular', 'Vue', 'CSS']}
                                                      value={favTechValue} onChange={setFavTechValue}
                                                      className="responsive-control" name="favTech"/>
                                </div>

                                <div className="pt-5">

                                    <NumberInput
                                        label="Enter your age"
                                        description="Don't lie...."
                                        className="w-[100px]"
                                        value={ageValue}
                                        onChange={setAgeValue}
                                        min={18}
                                        max={99}
                                        placeholder="18-99"
                                        name="age"
                                    />

                                    {ageError && <span className="text-sm text-red-500">ERROR! {ageError}</span>}
                                </div>

                            </Fieldset>

                            <Fieldset legend="Finally, how would you rate this form?"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5" style={{fontSize: "14px", fontWeight: "500"}}>Be honest (but 5
                                    stars
                                    please)
                                </div>
                                <div style={{
                                    fontSize: "12px",
                                    color: "#868E96",
                                    paddingBottom: "6px",
                                    fontWeight: "700px"
                                }}> Pick one
                                </div>
                                <Rating defaultValue={ratingValue} color="orange" value={ratingValue}
                                        onChange={setRatingValue} name="rating"/>
                            </Fieldset>
                        </div>

                        <div className="w-full lg:w-1/2 pt-5">
                            <Fieldset legend="End User License Agreement"
                                      style={{fontWeight: "bold", width: "90%"}}>
                                <span className="text-sm font-normal">Scroll to read, then agree to this agreement by agreeing at the bottom of this
                                    agreement. But only if you agree!<br/><br/></span>
                                <ScrollArea h={730} style={{
                                    paddingRight: "30px",
                                    paddingLeft: "20px",
                                    paddingTop: "10px",
                                    border: "thin solid lightgray",
                                    borderRadius: "5px"
                                }}>
                                    <div className="text-lg font-normal">HumancentiPad Plot</div>
                                    <div className="text-sm font-normal">
                                        [...cited from Wikipedia]<br/>
                                        After Eric Cartman boasts to his classmates of owning an iPad and mocks them for
                                        not having one, he is humiliated when it is revealed that he actually does not
                                        own
                                        one....&lt;snip /&gt; <br/><br/>
                                    </div>
                                    <hr style={{color: "lightgrey"}}/>
                                    <br/>
                                    <Switch
                                        style={{fontSize: "14px"}}
                                        checked={switchChecked}
                                        onChange={(event) => setSwitchChecked(event.currentTarget.checked)}
                                        label="I agree that I've read this End User License Agreement and I'm OK with selling my soul to Corporate America. I mean, did you NOT see this South Park episode???"
                                        name="eulaAgreement"
                                    />
                                    <br/>
                                </ScrollArea>
                                {switchError && <span className="text-sm text-red-500">ERROR! {switchError}</span>}
                            </Fieldset>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Group mt="md" className="pt-6">
                            <Button type="submit">Submit Form</Button>
                        </Group>
                    </div>
                </form>
            </div>


            <br/>
            <div className="shadow-md bg-white" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "10px",
                borderRadius: "10px"
            }}>{CodeBlock2({code2})}
            </div>

            <br/>

            <div className="shadow-md bg-white" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "10px",
                borderRadius: "10px"
            }}>{CodeBlock({code})}
            </div>

            <br/>

            <div className="shadow-md bg-white" style={{
                marginLeft: "2px",
                marginRight: "2px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "10px",
                borderRadius: "10px"
            }}>
                <strong>Summary</strong>:
                This form uses client and server side validation/processing. With the help of the Mantine form controls a user fills out and submits the form which immediately invokes the handleSubmit() method (line 35). After a quick check for errors on the client side, the server action submitForm() is invoked (line 48) and the form data is processed on the server (remember submitForm() is actually imported from the /actions folder - which lives on the server (hence &quot;server action&quot;)). At the moment a simple console.log() is spitting back the submitted form data on the server (check your terminal window for the server&apos;s response), but in the next post I&apos;ll configure the database query and take this thing end-to-end.
            </div>

        </div>
    )
}