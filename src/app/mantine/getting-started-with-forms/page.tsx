import type {Metadata} from "next";
import ClientSidePage from './clientSidePage'

export const metadata: Metadata = {
    title: 'Getting Started With Forms - Next.js and Mantine React Components Library',
    description: 'Implementing Mantine into Next.js demo; a form controlled by state, error checking and user feedback - complete with sample code',
    keywords: ['Mantine', 'Next.js and Mantine forms', 'Mantine core TextInput, Button, Group, PinInput,SegmentedControl, Rating, Fieldset, NumberInput, ScrollArea, Switch, Modal']
}

export default function GettingStartedWithForms() {
    return (
        <ClientSidePage />
    )
}