'use client'

import { useState } from 'react';
import { TextInput, Button, Group } from '@mantine/core';

const handleSubmit = () => {
    if (!value) {
        setError(true);
    } else {
        setError(false);
        alert('Form submitted!');
    }
};

export default function Input() {

    const [atmInputValue, setAtmInputValue] = useState('');
    const [firstNameInputValue, setFirstNameInputValue] = useState('');
    const [lastNameInputValue, setLastNameInputValue] = useState('');
    const [error, setError] = useState(false);

    return (
        <div>
            <TextInput
                label="Enter your first name"
                description="The one yo mamma gave you"
                value={firstNameInputValue}
                onChange={(event) => setFirstNameInputValue(event.currentTarget.value)}
                error={error ? 'This field is required' : null}
                required
                className="w-[300px] pb-4"
            />
            <TextInput
                label="Enter your last name"
                description="Don't get shy on me...."
                value={lastNameInputValue}
                onChange={(event) => setLastNameInputValue(event.currentTarget.value)}
                error={error ? 'This field is required' : null}
                required
                className="w-[300px] pb-4"
            />
            <TextInput
                label="Enter your ATM PIN"
                description="You can trust me"
                value={atmInputValue}
                onChange={(event) => setAtmInputValue(event.currentTarget.value)}
                error={error ? 'This field is required' : null}
                required
                className="w-[200px] pb-4"
            />
            <Group mt="md">
                <Button onClick={handleSubmit}>Submit</Button>
            </Group>
        </div>
    );
}