'use client'

import React, {useState} from "react";
import {
    TextInput,
    Button,
    Group,
    PinInput,
    SegmentedControl,
    Rating,
    Fieldset,
    NumberInput,
    ScrollArea,
    Switch,
    Modal
} from '@mantine/core';

import {useDisclosure} from '@mantine/hooks';
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, vs } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function GettingStartedWithForms() {

    const code = `//mantine controls are client side, so don't try running them in a server component!
'use client'

import React, {useState} from "react";

//import all of your mantine controls
import {
    TextInput,
    Button,
    Group,
    PinInput,
    SegmentedControl,
    Rating,
    Fieldset,
    NumberInput,
    ScrollArea,
    Switch,
    Modal
} from '@mantine/core';

// you need the useDisclosure hook for the Modal box
import {useDisclosure} from '@mantine/hooks';

import Image from "next/image";

//form controls
    const [firstValue, setFirstValue] = useState('');
    const [firstError, setFirstError] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [lastError, setLastError] = useState('');
    const [pinValue, setPinValue] = useState('');
    const [pinError, setPinError] = useState('');
    const [switchChecked, setSwitchChecked]: [boolean, (value: (((prevState: boolean) => boolean) | boolean)) => void] = 
    useState(true);
    const [switchError, setSwitchError] = useState('');
    const [ratingValue, setRatingValue] = useState(4);
    const [ageValue, setAgeValue] = useState<any>('');
    const [ageError, setAgeError] = useState('');
    const [favTechValue, setFavTechValue] = useState('Next.js');
    //modal controls
    //I open and close the modal box programmatically, using the useDisclosure hook and state 
    const [opened, {open, close}] = useDisclosure(false);
    const [modalOpen, setModalOpen] = useState(false);

    //error trapping on submit
    const handleSubmit = () => {
        //check for errors and state as needed. When everything checks out open the Modal
        (!firstValue) ? setFirstError('Enter your first name') : setFirstError('');
        (!lastValue) ? setLastError('Enter your last name') : setLastError('');
        (pinValue.length < 4) ? setPinError('PIN must contain 4 numbers') : setPinError('');
        (!ageValue) ? setAgeError('Select your age from the list') : setAgeError('');
        (!switchChecked) ? setSwitchError('You must agree to this End User License Agreement before proceeding') : 
        setSwitchError('');

        //if no errors, then automatically open the modal to display results/confirmation
        if (!firstValue || !lastValue || (pinValue.length < 4) || !switchChecked || !ageValue)
            return;
        else {
            setModalOpen(true);
        }
    };
    
    return (
        <div>
            <div className="min-h-screen m-4">
                <h2 className="w-full text-center text-xl">
                    Getting Started With Forms: Mantine Form Components
                </h2>

                <div className="shadow-md bg-white" style={{
                    marginLeft: "2px",
                    marginRight: "2px",
                    marginTop: "1px",
                    marginBottom: "4px",
                    border: "thin solid silver",
                    padding: "15px",
                    borderRadius: "10px"
                }}>
                    <div className="text-lg">Form Demo Using Mantine Form Components</div>
                    <span>Fill out the form below and then click the Submit Form button. You&apos;re information is completely 
                    safe with me. </span>
                    <div className="flex">
                        <div className="w-1/2">
                            {/*I display any error messages immediately beneath the troubled form control*/}
                            <Fieldset legend="Confidential Information"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <TextInput
                                    label="First Name"
                                    name="first"
                                    description="Enter your first name (required)"
                                    value={firstValue}
                                    onChange={(event) => setFirstValue(event.currentTarget.value)}
                                    required
                                    className="w-[300px] pt-4"
                                />
                                {firstError && <span className="text-sm text-red-500">ERROR! {firstError}</span>}
                                
                                <TextInput
                                    label="Last Name"
                                    name="last"
                                    description="Enter your last name (required)"
                                    value={lastValue}
                                    onChange={(event) => setLastValue(event.currentTarget.value)}
                                    required
                                    className="w-[300px] pt-4"
                                />
                                {lastError && <span className="text-sm text-red-500">ERROR! {lastError}</span>}

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
                                    <PinInput value={pinValue} onChange={setPinValue} type="number"/>
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
                                                      value={favTechValue} onChange={setFavTechValue}/>
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

                                    />
                                    {ageError && <span className="text-sm text-red-500">ERROR! {ageError}</span>}
                                </div>

                            </Fieldset>

                            <Fieldset legend="Finally, how would you rate this form?"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5" style={{fontSize: "14px", fontWeight: "500"}}>Be honest....
                                </div>
                                <div style={{
                                    fontSize: "12px",
                                    color: "#868E96",
                                    paddingBottom: "6px",
                                    fontWeight: "700px"
                                }}> Pick one
                                </div>
                                <Rating defaultValue={ratingValue} color="orange" value={ratingValue}
                                        onChange={setRatingValue}/>
                            </Fieldset>
                        </div>

                        <div className="w-1/2 pt-5">
                            <Fieldset legend="End User License Agreement"
                                      style={{fontWeight: "bold", width: "90%"}}>
                                <span className="text-sm" style={{fontWeight: "normal"}}>Scroll to read, then agree to 
                                this agreement by agreeing at the bottom of this agreement.<br/><br/></span>
                                <ScrollArea h={730} style={{
                                    paddingRight: "30px",
                                    paddingLeft: "20px",
                                    paddingTop: "10px",
                                    border: "thin solid lightgray",
                                    borderRadius: "5px"
                                }}>
                                    <div className="text-lg font-normal">HumancentiPad Plot</div>
                                    <div className="text-sm font-normal">
                                        After.... [EULA text here - saved for brevity]
                                    </div>
                                    <hr style={{color: "lightgrey"}}/>
                                    <br/>
                                    <Switch
                                        style={{fontSize: "14px"}}
                                        checked={switchChecked}
                                        onChange={(event) => setSwitchChecked(event.currentTarget.checked)}
                                        label="I agree that I've read this End User License Agreement and I'm OK with 
                                        selling my soul to Corporate America. I mean, did you NOT see this South Park episode???"
                                    />
                                    <br/>
                                </ScrollArea>
                                {switchError && <span className="text-sm text-red-500">ERROR! {switchError}</span>}
                            </Fieldset>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Group mt="md" className="pt-6">
                            <Button onClick={handleSubmit}>Submit Form</Button>
                        </Group>
                    </div>
                </div>
            </div>

            <Modal opened={modalOpen} onClose={() => setModalOpen(false)} withinPortal={true} title={
                <Group>
                    <Image
                        src="/images/logo.png"
                        alt="Modal Icon"
                        width={60}
                        height={60}
                    />
                    <span>Form Results - Thanks For Playing!</span>
                </Group>
            } withCloseButton={true}
                   className="text-base shadow-md" transitionProps={{transition: 'fade', duration: 300}}
            styles={{
                title: {color: '#27272A',},
                body: {color: '#27272A'},
            }}>

                <table style={{margin:'auto'}}>
                    <tbody>
                    <tr>
                        <td align="right">First name: &nbsp; </td>
                        <td align="left"> &nbsp; {firstValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Last name: &nbsp; </td>
                        <td align="left"> &nbsp; {lastValue}</td>
                    </tr>
                    <tr>
                        <td align="right">PIN: &nbsp; </td>
                        <td align="left"> &nbsp; {pinValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Favorite Tech: &nbsp; </td>
                        <td align="left"> &nbsp; {favTechValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Age: &nbsp; </td>
                        <td align="left"> &nbsp; {ageValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Rating: &nbsp; </td>
                        <td align="left"> &nbsp; {ratingValue} stars</td>
                    </tr>
                    <tr>
                        <td align="right">EULA: &nbsp; </td>
                        <td align="left"> &nbsp; {switchChecked ? 'Agreed' : 'Not Agreed'}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="pt-3">
                    Rest assured, none of your data has been saved or stored. No animals were harmed, no trees were 
                    cut down and no water was polluted during the production of this form.
                </div>
            </Modal>
        </div>
    )`

    const CodeBlock = ({ code }: { code: string }) => (
        <SyntaxHighlighter language="typescript" style={vs} showLineNumbers={true}>
            {code}
        </SyntaxHighlighter>
    );

    //form controls
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
    const handleSubmit = () => {
        //check for blanks
        (!firstValue) ? setFirstError('Enter your first name') : setFirstError('');
        (!lastValue) ? setLastError('Enter your last name') : setLastError('');
        (pinValue.length < 4) ? setPinError('PIN must contain 4 numbers') : setPinError('');
        (!ageValue) ? setAgeError('Select your age from the list') : setAgeError('');
        (!switchChecked) ? setSwitchError('You must agree to this End User License Agreement before proceeding') : setSwitchError('');

        //if no errors, then automatically open the modal to display results/confirmation
        if (!firstValue || !lastValue || (pinValue.length < 4) || !switchChecked || !ageValue)
            return;
        else {
            setModalOpen(true);
        }
    };

    return (
        <div  suppressHydrationWarning={true}>
            <div className="min-h-screen m-4">
                <h2 className="w-full text-center text-xl">
                    Getting Started With Forms: Mantine Form Components
                </h2>
                <p className="mt-3">Don&apos;t build your forms from scratch (nobody does that anymore).<br/><br/> There
                    are a metric-TON of popular React component libraries out there, including:</p>
                <ul className="pl-3 pt-4">

                    <li>&middot; <Link href="https://mui.com/material-ui/" target="_blank"> Material UI, </Link>
                    </li>
                    <li>&middot; <Link href="https://ant.design/" target="_blank"> Ant Design, </Link></li>
                    <li>&middot; <Link href="https://www.chakra-ui.com/" target="_blank"> Chakra UI, </Link></li>
                    <li>&middot; <Link href="https://www.nextui.org/" target="_blank"> Next UI, </Link></li>
                    <li>&middot; <Link href="https://headlessui.com/" target="_blank"> Headless UI, </Link></li>
                    <li>&middot; <Link href="https://react.semantic-ui.com/" target="_blank"> Semantic UI
                        React, </Link></li>
                    <li>&middot; <Link href="https://ui.shadcn.com/" target="_blank"> Shadcn/ui, </Link></li>
                    <li>&middot; <Link href="https://blueprintjs.com/" target="_blank"> Blueprint, </Link></li>
                    <li>&middot; <Link href="https://daisyui.com/" target="_blank"> Daisy UI, </Link></li>
                    <li>&middot; <Link href="https://www.radix-ui.com/" target="_blank"> Radix UI, </Link></li>
                    <li>&middot; <Link href="https://reactstrap.github.io/?path=/story/home-installation--page"
                                       target="_blank"> Reactstrap, </Link></li>
                    <li>&middot; <Link href="https://ui.aceternity.com/" target="_blank">Aceternity UI</Link></li>
                    <li>&middot; <Link href="https://park-ui.com/" target="_blank">Park UI, </Link></li>
                    <li>&middot; <Link href="https://coreui.io/" target="_blank">Core UI, </Link></li>
                    <li>&middot; <Link href="https://evergreen.segment.com/" target="_blank">Evergreen, </Link></li>
                    <li>&middot; <Link href="https://v2.grommet.io/" target="_blank">Grommet</Link></li>
                </ul>
                <br/>
                <p> ARE YOU KIDDING ME?! And that&apos;s not even all of them!
                    I went with the <Link href="https://mantine.dev/">Mantine library</Link> which has mucho components, a starter guide for Next.js (Rich
                    likes this), some really good looking charts and some handy tools. In a future post I&apos;ll be highlighting their <Link href="https://mantine.dev/core/drawer/" target="_blank">Drawer component</Link>
                    , which is a lot of fun for data-heavy pages.
                </p>
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
                    <div className="text-lg">Form Demo Using Mantine Form Components</div>
                    <span>Fill out the form below and then click the Submit Form button. Your information is completely safe with me. </span>
                    <div className="flex">
                        <div className="w-1/2">
                            {/*I display any error messages immediately beneath the troubled form control*/}
                            <Fieldset legend="Confidential Information"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <TextInput
                                    label="First Name"
                                    name="first"
                                    description="Enter your first name (required)"
                                    value={firstValue}
                                    onChange={(event) => setFirstValue(event.currentTarget.value)}
                                    required
                                    className="w-[300px] pt-4"
                                />
                                {firstError && <span className="text-sm text-red-500">ERROR! {firstError}</span>}

                                <TextInput
                                    label="Last Name"
                                    name="last"
                                    description="Enter your last name (required)"
                                    value={lastValue}
                                    onChange={(event) => setLastValue(event.currentTarget.value)}
                                    required
                                    className="w-[300px] pt-4"
                                />
                                {lastError && <span className="text-sm text-red-500">ERROR! {lastError}</span>}

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
                                    <PinInput value={pinValue} onChange={setPinValue} type="number"/>
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
                                                      value={favTechValue} onChange={setFavTechValue}/>
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

                                    />
                                    {ageError && <span className="text-sm text-red-500">ERROR! {ageError}</span>}
                                </div>

                            </Fieldset>

                            <Fieldset legend="Finally, how would you rate this form?"
                                      style={{marginTop: "20px", fontWeight: "bold", width: "90%"}}>
                                <div className="pt-5" style={{fontSize: "14px", fontWeight: "500"}}>Be honest (but 5 stars please)
                                </div>
                                <div style={{
                                    fontSize: "12px",
                                    color: "#868E96",
                                    paddingBottom: "6px",
                                    fontWeight: "700px"
                                }}> Pick one
                                </div>
                                <Rating defaultValue={ratingValue} color="orange" value={ratingValue}
                                        onChange={setRatingValue}/>
                            </Fieldset>
                        </div>

                        <div className="w-1/2 pt-5">
                            <Fieldset legend="End User License Agreement"
                                      style={{fontWeight: "bold", width: "90%"}}>
                                <span className="text-sm font-normal">Scroll to read, then agree to this agreement by agreeing at the bottom of this agreement. But only if you agree!<br/><br/></span>
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
                                        one. When he and his mother Liane go to Best Buy to buy an iPad, the item&apos;s
                                        exorbitant price prompts her to suggest buying a less expensive Toshiba
                                        HandiBook. The
                                        demanding Cartman, who had his mind set on the iPad as a status symbol, loudly
                                        excoriates her in the middle of the store, accusing her
                                        of &quot;f@$king&quot; him.
                                        Humiliated, Liane leaves the store without buying him anything.<br/><br/>

                                        Meanwhile, Cartman&apos;s classmate and frequent nemesis Kyle Broflovski, who
                                        did not read the Terms and Conditions when agreeing to download the latest
                                        iTunes
                                        update, is pursued by shadowy agents from Apple Inc., who wish to perform
                                        several intrusive
                                        acts upon him, informing him that he agreed to them when he downloaded the
                                        update. Kyle attempts to flee the men and is incredulous when his friends tell
                                        him they
                                        all read the entire Terms and Conditions when they downloaded the latest update.
                                        Kyle seeks refuge at his father Gerald&apos;s law office. Still, the Apple
                                        agents
                                        taser Gerald, kidnap Kyle, and throw him in a cage with a Japanese man named
                                        Junichi
                                        Takiyama and a young woman who also failed to read the fine print of their
                                        purchased updates.<br/><br/>

                                        At a Stevenote address, Steve Jobs unveils the new product for which Kyle and
                                        the other two were kidnapped: the HUMANCENTiPAD, comprising the three kidnapped
                                        subjects on all fours and sewn together mouth to anus. Junichi Takiyama is in
                                        front, with
                                        an iPhone attached to his forehead; Kyle is in the middle; and the woman is at
                                        the
                                        rear, with an iPad attached to her anus. However, Jobs is disappointed when Kyle
                                        continues to sign agreements that are put in front of him without reading them
                                        first, and puts the &quot;device&quot; through tests in an attempt to make it
                                        read.<br/><br/>

                                        Meanwhile, Cartman appears on the talk show Dr. Phil to publicly accuse Liane of
                                        &quot;f@$king&quot; him. The audience misunderstands this to mean that she has
                                        sexually molested him. Cartman is given the first-ever HUMANCENTiPAD as Jobs
                                        unveils it
                                        to the public as a consolation gift. Cartman is elated to have a device that not
                                        only supports web browsing and email but also enables him to induce someone to
                                        ******** into Kyle&apos;s mouth.<br/><br/>

                                        Seeking to free his son, Gerald goes with Kyle&apos;s friends Stan, Kenny and
                                        Butters to an Apple Store, where the customer service agents known as &quot;the
                                        Geniuses&quot;, after considerable deliberations, determine that they can void
                                        Kyle&apos;s agreement
                                        if Gerald, a PC user, signs up with Apple and creates a family account. Gerald
                                        consents,
                                        after which he, the Geniuses, and Kyle&apos;s friends go to the studio where Dr.
                                        Phil
                                        is produced. Jobs, complying with Gerald&apos;s new deal, reluctantly makes
                                        preparations to have Kyle separated from his two fellow victims. This enrages
                                        Cartman, whose
                                        dream is now being quashed. Cartman looks up to the heavens and angrily
                                        excoriates
                                        God, after which he is struck by a bolt of lightning. He is then shown
                                        recuperating
                                        in a hospital bed, crying while his mother flips through a book
                                        indifferently.<br/><br/>
                                    </div>
                                    <hr style={{color: "lightgrey"}}/>
                                    <br/>
                                    <Switch
                                        style={{fontSize: "14px"}}
                                        checked={switchChecked}
                                        onChange={(event) => setSwitchChecked(event.currentTarget.checked)}
                                        label="I agree that I've read this End User License Agreement and I'm OK with selling my soul to Corporate America. I mean, did you NOT see this South Park episode???"
                                    />
                                    <br/>
                                </ScrollArea>
                                {switchError && <span className="text-sm text-red-500">ERROR! {switchError}</span>}
                            </Fieldset>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Group mt="md" className="pt-6">
                            <Button onClick={handleSubmit}>Submit Form</Button>
                        </Group>
                    </div>
                </div>
            </div>

            <Modal opened={modalOpen} onClose={() => setModalOpen(false)} withinPortal={true} title={
                <Group>
                    <Image
                        src="/images/logo.png"
                        alt="Modal Icon"
                        width={60}
                        height={60}
                    />
                    <span>Form Results - Thanks For Playing!</span>
                </Group>
            } withCloseButton={true}
                   className="text-base shadow-md" transitionProps={{transition: 'fade', duration: 300}}
                   styles={{
                       title: {color: '#27272A',},
                       body: {color: '#27272A'},
                   }}>

                <table style={{margin: 'auto'}}>
                    <tbody>
                    <tr>
                        <td align="right">First name: &nbsp; </td>
                        <td align="left"> &nbsp; {firstValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Last name: &nbsp; </td>
                        <td align="left"> &nbsp; {lastValue}</td>
                    </tr>
                    <tr>
                        <td align="right">PIN: &nbsp; </td>
                        <td align="left"> &nbsp; {pinValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Favorite Tech: &nbsp; </td>
                        <td align="left"> &nbsp; {favTechValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Age: &nbsp; </td>
                        <td align="left"> &nbsp; {ageValue}</td>
                    </tr>
                    <tr>
                        <td align="right">Rating: &nbsp; </td>
                        <td align="left"> &nbsp; {ratingValue} stars</td>
                    </tr>
                    <tr>
                        <td align="right">EULA: &nbsp; </td>
                        <td align="left"> &nbsp; {switchChecked ? 'Agreed' : 'Not Agreed'}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="pt-3">
                    Rest assured, none of your data has been saved or stored. No animals were harmed, no trees were cut
                    down and no water was polluted during the production of this form.
                </div>
            </Modal>

            <div className="shadow-md bg-white" style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "1px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "15px",
                borderRadius: "10px"
            }}>
                <strong>Summary:</strong> This post is to demonstrate the actual UI/form/Mantine controls on the front
                end
                (I&apos;ll go over form processing and server side functionality at a later time). To set this file up,
                I imported the Mantine controls (including the Modal screen), created local states for the actual
                form values and their possible errors. When the Submit Form button is clicked the handleSubmit()
                function kicks in and sets
                the error states, as needed, and displays any errors in red text immediately beneath the affected
                control. CSS has
                been mixed in (I&apos;ll clean it up later - hmmm probably not) but after all the errors clear I pump the form values into
                a modal box so you can see that I actually captured (but didn&apos;t save!) the submitted form values. In a future post instead of using this modal I&apos;ll
                use a server action to process the submitted values - stay tuned. I could ramble on and on here, but
                check the comments inline below, you&apos;ll get a better feel for what I actually did.<br/><br/>
                <strong>My 2 Cents Worth:</strong> I like working with the Mantine controls, they&apos;re consistent and straight-forward to implement. The
                docs are good/very good and there are more
                than a few examples to get you going. Chances are good that if you run into any problems with these
                controls, it&apos;s likely a Next.js/React issue
                and not a Mantine control issue. I&apos;m going to get a lot of mileage out of their Modal box as it is very
                configurable and customizable. I could drone on about, &quot;
                ... how Mantine offers this control and that control where none of the other libraries offer anything like
                it...&quot;  but features for all of the libraries will
                eventually &apos;bubble up to same&apos; after enough time goes by....<br/><br/>
                <strong>Disclaimer:</strong> If you didn&apos;t like how I coded something in particular then change it for your own use case and quit
                bombing my inbox. I&apos;m sensitive and you&apos;re hurting my feelings ;-)

            </div>

            <div className="shadow-md bg-white" style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "20px",
                marginBottom: "4px",
                border: "thin solid silver",
                padding: "15px",
                borderRadius: "10px"
            }}>
                {CodeBlock({code})}
            </div>

        </div>
    )
}
