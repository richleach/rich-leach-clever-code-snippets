import type {Metadata} from "next";
import ClientSidePage from './clientSidePage'

export const metadata: Metadata = {
    title: 'Processing Form Data - Next.js and Mantine Form Components Library',
    description: 'Processing form data using Next.js server actions with client side validation demo; a form controlled by state, client and server side error checking and user feedback - complete with sample code',
    keywords: ['Mantine', 'Next.js and Mantine forms', 'Client side validation with Next.js server actions', 'Mantine core TextInput, Button, Group, PinInput,SegmentedControl, Rating, Fieldset, NumberInput, ScrollArea, Switch, Modal']
}

export default function GettingStartedWithForms() {
    return (
        <ClientSidePage />
    )
}