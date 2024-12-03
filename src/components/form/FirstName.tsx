'use client'

type Props = {
    value: string;
    onChange: any;
    error?: string;
}

import { TextInput } from '@mantine/core';

export default function FirstName({ value, onChange, error }: Props) {

    return (
        <TextInput
            label="Enter your first name"
            description="The one yo mamma gave you"
            value={value}
            onChange={(event) => onChange(event.currentTarget.value)}
            error={error}
            required
        />
    );

}